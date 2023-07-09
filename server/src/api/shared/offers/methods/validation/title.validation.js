
export const titleValidationFn = (check) =>

    check('title')
        .isLength({ min: 3, max: 35 }).withMessage('Please write tittle again! Require min 3, max 35 alphabetical characters!')
        .isString().withMessage('Please write tittle again! Require alphabetical characters!')
        .trim()
        .escape()


