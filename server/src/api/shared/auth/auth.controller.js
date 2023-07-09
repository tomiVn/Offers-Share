import { authServiceClass } from "./auth.service.js";
import { authMethod } from "./methods/controller/auth.method.js";
import { registerMethod } from "./methods/controller/register.method.js";
import { loginUrlValidation, registerFormValidation } from "./auth.validation.js";

export const authController =
    (router, { middlewareObj, controllerMethodsArr } = sharedRouterMethodsObj) =>

        router
            .get('/',

                loginUrlValidation,
                middlewareObj.errorHandlerFn,
                authMethod(authServiceClass, ...controllerMethodsArr))
 
            .post('/',

                middlewareObj.guestGuardFn,
                registerFormValidation,
                middlewareObj.errorHandlerFn,
                registerMethod(authServiceClass, ...controllerMethodsArr))
