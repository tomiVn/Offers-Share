import { reduceOfferProperties } from "../helper/reduce.offer.js";

export function updateOffer(offerService, errorMethodsObj, responseFn, cloudinary) {

    return async (req, res) => {

        try {            
            if (!req?.params?.id) {

                errorMethodsObj.throwErrorFn('[Search error] - We need offer ID!')
            }

            let propertiesForm = req.body;

            const filter = { _id: req.params.id };

            const options = {

                _populate: {
                    path: 'creator',
                    select: ['_id', 'name'],
                }
            }
            //Todo
            const offer = await offerService.findOne(filter, options);
           
            if (!offer) {

                errorMethodsObj.throwErrorFn(`[Search error] - Ther is no exist offer with id - ${req.params.id}`);
            }
            
            if (offer.creator._id === req.user._id) {
                
                const { watchedList } = propertiesForm;

                // if(!watchedList){
                    
                //     errorMethodsObj.throwErrorFn( `You can't update offer with id - ${req.params.id}`, 
                //         '[Athorization error]' );
                // }

                propertiesForm = { watchedList };             
            }

            let properties = reduceOfferProperties(propertiesForm);
            
            const file = req?.file?.path;
            
            if (file) {

                const upload = await cloudinary.uploader.upload(file, { folder: req.user.id });

                    properties = Object.assign(properties, { image: upload.url });
            }
            
            let update = await offerService.updateOne(offer, properties);
            
            return res.status(200)
                .json(responseFn(update, '[Valid request!] - Successfully updated offer.'));

        }
        catch (error) {
            console.log('[Update Offer Error]', error);
            
            const errors = errorMethodsObj.parseErrorsFn(error);

            return res.status(400)
                .json(responseFn(errors, '[Invalid request!] - Offer is not updated!'))
        }
    }
}