import express from 'express';
import { fetchLandingPageContent, fetchNewestStories } from './content.service';
const router = express.Router();

// Routes
router.get('/landing-page', getLandingPageContent);
router.get('/newest-stories', getNewestStories);

export default router;

function getLandingPageContent(_: express.Request, res: express.Response, next: express.NextFunction) {
	fetchLandingPageContent()
		.then((result) => res.json(result))
		.catch((err) => next(err));
}

function getNewestStories(req: express.Request, res: express.Response, next: express.NextFunction) {
	const { limit } = req.query;
	fetchNewestStories({ limit: parseInt(limit as string) })
		.then((result) => res.json(result))
		.catch((err) => next(err));
}
