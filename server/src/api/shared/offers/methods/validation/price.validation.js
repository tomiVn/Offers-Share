export function priceValidationFn(check) {
    return check('price', 'Price is not valid!')
        .notEmpty()
        .isFloat({min: 0}).withMessage('The product price must be a positive number!')
        //.isDecimal('The product price must be a decimal number!')
        .trim()
        .escape()
} 