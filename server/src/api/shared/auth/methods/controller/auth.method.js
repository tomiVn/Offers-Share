import { payload } from "../helper/payload.auth.js";

export function authMethod(authService, errorMethodsObj, responseFn ) {

    return async (req, res, next) => {

        try {

            const { email, password, validate, logout } = req?.query;

            if (validate) {

                let data = [];

                if(req?.user){

                    const { _id, name, role, token } = req?.user;

                    if(_id){
    
                        data = [ {_id, name, role, token} ];
                    }
                }
                
                return res.status(200)
                    .json(responseFn(data, '[Valid request!] - Successfully authenthicated'));
            }

            if (logout) {

                const data = [{ message: 'Hope to see you again' }]
        
                return res.status(200)
                    .json(responseFn(data, '[Valid request!] - Successfully authenthicated'));
            }
            
            if (!email || !password) {
                errorMethodsObj.throwErrorFn('Doesn\'t Meet Requirements!')
            }

            let _optionsObj = { };

            const filter = { email }
            const user = await authService.findOne(filter, _optionsObj);

            if (!user) {
                errorMethodsObj.throwErrorFn('Wrong email or password!');
            }

            const valid = await user.validatePassword(password);

            if (!valid) {
                errorMethodsObj.throwErrorFn('Wrong email or password!');
            }

            const token = await authService.createToken(user);

            const data = [ payload(user, token) ];
            
            return res.status(200)
                .json(responseFn(data, '[Valid request!] - Successfully authenthicated'));

        }
        catch (error) {

            console.log('[Auth Error] - Request from server Auth Method!', error);

            const errors = errorMethodsObj?.parseErrorsFn(error);

            return res.status(400)
                .json(responseFn(errors, '[Invalid request] - Unsuccessful authenthication!'))
        }
    }

}