
export function guestGuardFn(req, res, next, errorMethodsObj, responseFn) {



    return (req, res, next) => {

        try {

            if (req.user) {

                errorMethodsObj.throwErrorFn('There is already user! Please logout first.')
            }

            next();
        }
        catch (error) {

            const errors = errorMethodsObj.parseErrorsFn(error);

            return res.status(400)
                .json(responseFn(errors, 'Protected path!'))
        }

    }

}