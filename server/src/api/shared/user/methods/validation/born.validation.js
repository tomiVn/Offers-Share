
export function bornValidationFn(check) {

    return check('born', 'Born date is not valid!')

        .optional({ nullable: true, checkFalsy: true })

        .custom((dateValue, { req, loc, path }) => {

            if (new Date(dateValue)) {
                return true;
            } else {
                return false;
            }

        })
        .escape()
}
