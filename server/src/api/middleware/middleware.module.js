import jwt from 'jsonwebtoken';
import { validationResult } from "express-validator";

import { errorMethodsObj } from "../utils/errors/errors.methods.js";
import { responseFn } from "../utils/response/response.methods.js";
import { authFn } from './methods/auth.interceptor.js';
import { guestGuardFn } from './methods/guest.guard.js';
import { userGuardFn } from './methods/user.guard.js';
import { errorHandlerFn } from './methods/error.handler.js';
import { utilsUrlValidationMethodsObj } from '../utils/validation/url.validation.js';
import { authorizationLevelFn } from './methods/authorization.level.js';

export const middlewareObj = Object.freeze({

    authFn:               authFn(jwt, errorMethodsObj, responseFn),

    guestGuardFn:         guestGuardFn(errorMethodsObj, responseFn),

    userGuardFn:          userGuardFn(errorMethodsObj, responseFn),

    authorizationLevelFn: (roles) => authorizationLevelFn(roles, errorMethodsObj, responseFn),

    urlValidation:        utilsUrlValidationMethodsObj,

    errorHandlerFn:       errorHandlerFn(errorMethodsObj, responseFn, validationResult)

})

// ## ToDo
// ## AutorizationLevel - userGuardFn, anonymousGuardFn
// ## Set here formValidations methods