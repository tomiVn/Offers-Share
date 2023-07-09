
import { userServiceClass } from "./user.service.js";
import { findUser }  from "./methods/controller/find.user.js";
import { updateUser } from "./methods/controller/update.user.js"
import { userFormValidation } from "./user.validation.js";

export const userController = (router,
    { middlewareObj, controllerMethodsArr } = sharedRouterMethodsObj, uploadFile, cloudinary) =>

    router
        .get('/:id',
                middlewareObj.userGuardFn,
                middlewareObj.urlValidation.idValidationFn,
                middlewareObj.errorHandlerFn,
            findUser(userServiceClass, ...controllerMethodsArr))

        .put('/:id',
                uploadFile,
                middlewareObj.userGuardFn,
                middlewareObj.urlValidation.idValidationFn,
                userFormValidation,
                middlewareObj.errorHandlerFn,
            updateUser(userServiceClass, ...controllerMethodsArr, cloudinary))