import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import planetsRouter from './routes/planets.router';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/planets', planetsRouter);

export default app;
