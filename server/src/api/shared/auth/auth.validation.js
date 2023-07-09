import { utilsFormValidationMethodsObj } from "../../utils/validation/form.validation.js";
import { utilsUrlValidationMethodsObj } from "../../utils/validation/url.validation.js";


export const loginUrlValidation = [

    utilsUrlValidationMethodsObj.emailValidationFn,
    utilsUrlValidationMethodsObj.passwordValidationFn, 
];

export const registerFormValidation = [

    utilsFormValidationMethodsObj.emailValidationFn,
    utilsFormValidationMethodsObj.passwordConfirmValidationFn
];