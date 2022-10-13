import express from 'express';
import bodyParser from 'body-parser';
import config from './config.js';
import cors from 'cors';

// routes 
import routes from './routes/index.js';
import db from './models/index.js';

const port = config.service.port || 3000;

// 1. Set up the express app
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// 2. Require our routes into the application.
app.use('/api', routes);


app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

// 3. Server listen to port
app.listen(port, () => `Server is running on port ${port}`);

db.sequelize.sync();

export default app;