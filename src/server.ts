import express from 'express';
import { router } from './router/router';
const app = express();
const port = 3000;

app.use('/api', router);

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
