import { check } from "express-validator";
import { utilsFormValidationMethodsObj } from "../../utils/validation/form.validation.js";
import { roleValidationFn } from "./methods/validation/role.validation.js";
import { nameValidationFn } from "./methods/validation/name.validation.js";
import { genderValidationFn } from "./methods/validation/gender.validation.js";
import { bornValidationFn } from "./methods/validation/born.validation.js";
import { dialCodeValidationFn } from "./methods/validation/dialcode.validation.js";

export const userFormValidation = [

    nameValidationFn(check),

    utilsFormValidationMethodsObj.emailValidationFn,

    utilsFormValidationMethodsObj.passwordConfirmValidationFn,

    roleValidationFn(check),

    genderValidationFn(check),

    bornValidationFn(check),
    
    //Todo avatar validation
    dialCodeValidationFn(check),
    //Toto phone number validation
];