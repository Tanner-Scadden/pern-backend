import * as express from 'express';
import api from './api';

require('dotenv').config();
const app = express();
const { SERVER_PORT } = process.env;
import sequelize from './db';

app.use(express.json());
app.use('/api', api);

app.listen(SERVER_PORT, () =>
sequelize
.authenticate()
.then(() => console.log(`Server and DB running at port ${SERVER_PORT}`))
.catch((err) => console.log('Connection Failed', err))
);
