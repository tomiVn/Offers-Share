
export function findUser(userService, errorMethodsObj, responseFn) {

    return async (req, res) => {

        try {
            //check url params
            let _id = req?.params?.id;

            if (_id !== req?.user?._id) {
                errorMethodsObj.throwErrorFn('[Url Error] - This Url not match with user profile!');
            }

            const filter = { _id };

            const options = {

                _select: ['-password'],

                _populate: [
                    { path: 'created_offers' },
                    
                    { path: 'watched_offers' }
                ],

                //_limit: 1,

                //_sort: 'name'
            }

            let user = await userService.findOne(filter, options);

            res.status(200)
                .json(responseFn(user, ''));
            return;

        } catch (error) {

            const errors = errorMethodsObj.parseErrorsFn(error);

            return res.status(400)
                .json(responseFn(errors, ''))
        }
    }
}
