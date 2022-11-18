import express from 'express';

const app = express();

const routes = express.Router();

routes.get(`/reviews`, require('./reviews').default);

// Add the routes to the /api endpoint
app.use('/api', routes);

export default app;
