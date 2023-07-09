import express, { json } from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { dbConnectFn } from './config/db.config.js';
import { corsFn } from './config/cors.config.js';
import { _routes } from './api/shared/shared.router.js';
import { middlewareObj } from './api/middleware/middleware.module.js';
import { errorHandlerFn } from './api/utils/errors/methods/error.handler.js';
import { dotenvPath } from './var/dotenv.path.js';

dotenv.config( { path: dotenvPath } );
const PORT = process.env.PORT || 3000;
const app = express();

app
    .use(helmet())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(json())
    .use(middlewareObj.authFn)
    .use(corsFn())
    .use('/api', _routes)
    .use(errorHandlerFn);

dbConnectFn()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
    })
    .catch((err) => console.log(`DB connection Error ${err}`));