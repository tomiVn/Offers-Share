import { payload } from "../helper/payload.auth.js";
import { reduceUserProperties } from "../helper/reduce.user.js";

export function registerMethod(authService, errorMethodsObj, responseFn) {

    return async (req, res) => {

        try {
            
            let properties = reduceUserProperties(req.body);

            const filter = { email: properties.email };

            const options = { _select: ['_id'] }

            const user = await authService.findOne(filter, options);

            if (user) {

                errorMethodsObj
                    .throwErrorFn('Sorry, this email already exists! If this is you log in now.');
            }

            const new_user = await authService.insert(properties);

            const token = await authService.createToken(new_user);

            const data = payload(new_user, token);

            return res.status(201)
                .json(responseFn(data , '[Valid request!] - Successful registration.'));

        } catch (error) {

            const errors = errorMethodsObj.parseErrorsFn(error);

            return res.status(400)
                .json(responseFn(errors, '[Invalid request!] - Unsuccessful registration!'))
        }
    }
}