
export function errorHandlerFn(errorMethodsObj, responseFn, validationResult) {

    return (req, res, next) => {

        let validationResultArray = validationResult(req).array();

        if (validationResultArray.length > 0) {

            const errors = errorMethodsObj.parseErrorsFn(validationResultArray);
         
            return res.status(400)
                .json(responseFn(errors, ''))
        }

        next();
    }
}