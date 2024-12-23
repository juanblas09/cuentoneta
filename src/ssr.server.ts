import {
	AngularNodeAppEngine,
	CommonEngine,
	createNodeRequestHandler,
	isMainModule,
	writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import routes from './api/routes';
import bootstrap from './main.server';
import { APP_BASE_HREF } from '@angular/common';

export function app(): express.Express {
	const server = express();
	const serverDistFolder = dirname(fileURLToPath(import.meta.url));
	const browserDistFolder = resolve(serverDistFolder, '../browser');
	const indexHtml = join(serverDistFolder, 'index.server.html');

	// Here, we now use the `AngularNodeAppEngine` instead of the `CommonEngine`
	const angularNodeAppEngine = new AngularNodeAppEngine();
	const commonEngine = new CommonEngine();

	// Registra las routes utilizadas por la API
	for (const route of routes) {
		server.use(`/api${route.path}`, route.controller);
	}

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

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
const server = app();
if (isMainModule(import.meta.url)) {
	const port = process.env['PORT'] || 4000;
	server.listen(port, () => {
		console.log(`Aplicación en modo Server-Side Rendering corriendo en http://localhost:${port}`);
	});
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createNodeRequestHandler(server);
