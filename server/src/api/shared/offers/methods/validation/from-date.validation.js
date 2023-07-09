
export function fromDateValidationFn(check) {

    return check('fromDate', 'From date is not valid!')

        .notEmpty().withMessage('Please write firts day of offer!')

        .custom((dateValue, { req, loc, path }) => {

            if (new Date(dateValue)) {
                return true;
            } else {
                return false;
            }

        }).withMessage('Not valid Date!')
        
        .escape()
}