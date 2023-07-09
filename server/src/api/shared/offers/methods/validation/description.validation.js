export function descriptionValidationFn(check) {
    return check('description')
        .isString()
        .trim()
        .isLength({ min: 3, max: 1250 }).withMessage('Description Must Be at Least 3 Characters and max 1250!')
        .escape()
} 