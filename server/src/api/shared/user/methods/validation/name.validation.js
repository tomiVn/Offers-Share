
export function nameValidationFn(check) {

    return check('name', 'Name is not valid!!!')

        .optional({ nullable: true, checkFalsy: true })
        .isString()
        .trim()
        .isLength({ min: 3 }).withMessage('Name Must Be at Least 3 Characters!')
        .escape()
} 