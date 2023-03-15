import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config';
import { connectToDB } from './db/db';
import router from './routes/router';
import errorHandler from './helpers/ErrorHandler';

const app: Express = express();

connectToDB();

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());
app.use('/api', router);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is running at http://localhost:${config.PORT}`);
});