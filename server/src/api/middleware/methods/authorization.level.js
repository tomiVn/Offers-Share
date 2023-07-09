export function authorizationLevelFn
    (roleRestrictionsArray, errorMethodsObj, responseFn) {

    return (req, res, next) => {

        try {

            const isAuthorize = roleRestrictionsArray.find(role => req?.user?.role === role);

            if (!isAuthorize) {

                errorMethodsObj.throwErrorFn('You are not Authorized!')
            }

            next();

        } catch (error) {

            const errors = errorMethodsObj.parseErrorsFn(error);

            return res.status(400)
                .json(responseFn(errors, ''))
        }
    }
}