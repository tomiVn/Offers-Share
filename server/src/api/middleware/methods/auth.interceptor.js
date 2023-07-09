import dotenv from 'dotenv';
import { dotenvPath } from '../../../var/dotenv.path.js';
dotenv.config({ path: dotenvPath });

export function authFn(jwt, errorMethodsObj, responseFn) {

    return (req, res, next) => {

        const token = req.headers['x-authorization'];

        if (token) {
            
            jwt.verify(token, process.env.SECRET_KEY, function (error, decoded) {

                if (error) {
                    
                    errorMethodsObj.throwErrorFn('Invalid token!')
                }

                req.user = {...decoded, token};

                res.locals.user = decoded;
            });
        }

        next();
    }
}