import express from 'express';
import bodyParser from 'body-parser';
import authorRoutes from './routes/authors';

const app = express();
// Routes
app.use('/authors', authorRoutes);

// Root
app.get('/', (_req, res) => {
    res.send('Library API is running');
});

export default app;
