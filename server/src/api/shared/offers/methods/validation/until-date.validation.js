export function untilDateValidationFn(check) {

    return check('untilDate', 'Until date is not valid!')

        .notEmpty().withMessage('Please write last day of offer!') 

        .custom((untilDate, { req, loc, path }) => {

            if (new Date(untilDate) > new Date(req.body.fromDate)) {
                return true;
            } else {
                return false;
            }
            
        }).withMessage('Until date must be a greater than from date!')

        .escape()
}