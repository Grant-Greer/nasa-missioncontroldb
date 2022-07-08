import logger from 'morgan';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import planetsRouter from './routes/planets.router';

const app = express();
app.use(logger('dev'));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(planetsRouter);

export default app;
