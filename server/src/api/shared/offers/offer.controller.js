import { createOffer } from "./methods/controller/create.offer.js";
import { deleteOffer } from "./methods/controller/delete.offer.js";
import { findByIdOffer } from "./methods/controller/find-by-id.offer.js";
import { findOffer } from "./methods/controller/find.offer.js";
import { updateOffer } from "./methods/controller/update.offer.js";
import { offerService } from "./offer.service.js";
import { offerFormValidationArr } from "./offer.validation.js"

export const offerController =
    (router, { middlewareObj, controllerMethodsArr } = sharedRouterMethodsObj, 
        uploadFile, cloudinary) =>
        
        router

            .get('/',
                    middlewareObj.urlValidation.idValidationFn,
                    middlewareObj.errorHandlerFn,
                findOffer(offerService, ...controllerMethodsArr))

            .get('/:id',
                    middlewareObj.urlValidation.idValidationFn,
                    middlewareObj.errorHandlerFn,
                findByIdOffer(offerService, ...controllerMethodsArr))

            .post('/',  
                    uploadFile,           
                    middlewareObj.userGuardFn,          
                    middlewareObj.authorizationLevelFn(['admin', 'staff']),
                    offerFormValidationArr,
                    middlewareObj.errorHandlerFn,                
                createOffer(offerService, ...controllerMethodsArr, cloudinary))

            .put('/:id',
                    uploadFile,
                    middlewareObj.urlValidation.idValidationFn,
                    middlewareObj.userGuardFn,        
                    offerFormValidationArr,
                    middlewareObj.errorHandlerFn,
                updateOffer(offerService, ...controllerMethodsArr, cloudinary))

            .delete('/:id',

                    middlewareObj.urlValidation.idValidationFn,
                    middlewareObj.userGuardFn,
                    middlewareObj.errorHandlerFn,
                deleteOffer(offerService, ...controllerMethodsArr, cloudinary))