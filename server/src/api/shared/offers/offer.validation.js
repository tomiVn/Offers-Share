import { check, body } from "express-validator";
import { titleValidationFn } from "./methods/validation/title.validation.js";
import { descriptionValidationFn } from "./methods/validation/description.validation.js";
import { priceValidationFn } from "./methods/validation/price.validation.js";
import { fromDateValidationFn } from "./methods/validation/from-date.validation.js";
import { untilDateValidationFn } from "./methods/validation/until-date.validation.js";

export const offerFormValidationArr = [
 
    titleValidationFn(check),

    descriptionValidationFn(check),

    priceValidationFn(check),

    fromDateValidationFn(check),
    
    untilDateValidationFn(check),
];


