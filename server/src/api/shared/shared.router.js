import { Router } from 'express';
import { errorMethodsObj } from "../utils/errors/errors.methods.js";
import { responseFn } from '../utils/response/response.methods.js';
import { middlewareObj } from '../middleware/middleware.module.js';
import multer from '../../config/multer.config.js';
import cloudinary from '../../config/cloudinary.config.js';

import { authController } from './auth/auth.controller.js';
import { userController } from './user/user.controller.js';
import { offerController } from './offers/offer.controller.js';

const router = Router();
const uploadFile = multer.single('file');

const sharedRouterMethodsObj = {

    middlewareObj,
    controllerMethodsArr: [ errorMethodsObj, responseFn ]
}

const uploadFileArr = [uploadFile, cloudinary]
 
export const _routes =
    router
        .use('/auth', authController(Router(), sharedRouterMethodsObj))

        .use('/user', userController(Router(), sharedRouterMethodsObj, ...uploadFileArr))

        .use('/offer', offerController(Router(), sharedRouterMethodsObj, ...uploadFileArr));
