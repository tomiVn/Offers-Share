
export function genderValidationFn(check) {

    return check('gender', 'Gender is not valid!')

        .optional({ nullable: true, checkFalsy: true })

        .isIn(['male', 'female', 'undefined']).withMessage('This gender value is not in our list!')

        .unescape()
        .escape()
}