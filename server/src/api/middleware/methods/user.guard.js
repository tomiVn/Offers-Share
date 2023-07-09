
export function userGuardFn(errorMethodsObj, responseFn) {

    return (req, res, next) => {

        try {
            
            if (!req.user) {

                errorMethodsObj.throwErrorFn('Please register or logIn!');
            }
                       
            next();
        }
        catch (error) {
            
            const errors = errorMethodsObj.parseErrorsFn(error);

            return res.status(401)
                .json(responseFn(errors, 'Protected path!'))
        }
    }
}