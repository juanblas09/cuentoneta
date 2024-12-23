import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';
import routes from './api/routes';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

export function app(): express.Express {
	const server = express();
	const commonEngine = new CommonEngine();

	// Registra las routes utilizadas por la API
	for (const route of routes) {
		server.use(`/api${route.path}`, route.controller);
	}

	/**
	 * Serve static files from /browser
	 */
	server.get(
		'**',
		express.static(browserDistFolder, {
			maxAge: '1y',
			index: 'index.html',
		}),
	);

	/**
	 * Handle all other requests by rendering the Angular application.
	 */
	server.get('**', (req, res, next) => {
		const { protocol, originalUrl, baseUrl, headers } = req;

		commonEngine
			.render({
				bootstrap,
				documentFilePath: indexHtml,
				url: `${protocol}://${headers.host}${originalUrl}`,
				publicPath: browserDistFolder,
				providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
			})
			.then((html) => res.send(html))
			.catch((err) => next(err));
	});

	return server;
}

const server = app();
/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
	const port = process.env['PORT'] || 4000;
	server.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}
