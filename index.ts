import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import {config} from './config';

const app: Express = express();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${config.PORT}`);
});