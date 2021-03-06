import api from './api';
import config from './config';
import errorHandler from './lib/errorHandler';
import express from 'express';
import frontend from './frontend';

const app = express();

app.use('/api/v1', api);
app.use(frontend);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log('Server started at port %s', config.port);
});
