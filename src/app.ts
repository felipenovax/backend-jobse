import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRoutes from './routes/userRoutes';
import professionalRoutes from './routes/professionalRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/professionals', professionalRoutes);
app.use('/orders', orderRoutes);

export default app;
