import { reduceUserProperties } from "../helper/reduce.user.js";

export function updateUser(userService, errorMethodsObj, responseFn, cloudinary) {

    return async (req, res) => {
             
        try {
        
            if (req?.params?.id !== req?.user?._id) {
                errorMethodsObj.throwErrorFn('[Url Error] - This Url ID not match with user profile!');
            }

            const filter = { _id: req.params.id };

            const optionsObj = {

                _select: ['-password']
            };

            let document = await userService.findOne(filter, optionsObj);

            if (!document) {

                errorMethodsObj.throwErrorFn('[Search error] - We can\'t find user!')
            }
            
            let properties = reduceUserProperties(req.body);
            
            const file = req?.file?.path;
            
            if (file) {
                
                const upload = await cloudinary.uploader
                    .upload(file, { folder: req.user._id });

                    properties = Object.assign(properties, { avatar: upload.url });
            }

            if (!properties) {

                errorMethodsObj.throwErrorFn('[Data error] - We can\'t update your profile! There is no data sent!')
            }

            let updatedUser = await userService.updateOne(document, properties);

            updatedUser.password = undefined;

            let list = ['title', 'image', 'description', 'price']

            if(updatedUser?.watched_offers?.length > 0 && !updatedUser.watched_offers[0].title){
                
                updatedUser = await updatedUser
                    .populate({ path: 'watched_offers', select: list });
            }

            if(updatedUser?.created_offers?.length > 0 && !updatedUser.created_offers[0].title){
                
                updatedUser = await updatedUser
                    .populate({ path: 'created_offers', select: list });
            }
            
            return res.status(200)
                .json(responseFn([updatedUser], ''));

        } catch (error) {

            const errors = errorMethodsObj.parseErrorsFn(error);

            return res.status(400)
                .json(responseFn(errors, ''))
        }

    }
}