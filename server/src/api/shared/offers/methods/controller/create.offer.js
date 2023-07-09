import { reduceOfferProperties } from "../helper/reduce.offer.js";

export function createOffer(offerService, errorMethodsObj, responseFn, cloudinary) {

    return async (req, res) => {

        try {
            console.log('[Req Body]',req.body);
            
            let properties = reduceOfferProperties({
                ...req.body,
                creator: req?.user?._id,
            });

            const file = req?.file?.path;

            if (file) {

                const upload = await cloudinary.uploader
                    .upload(file, { folder: req.user.id });

                properties = Object.assign(properties, { image: upload.url });
            }

            let offer   = await offerService.insert(properties);
            let payload = await offer.populate({path: 'creator', select: ['name', 'created_offers'] });

            return res.status(200)
                .json(responseFn(payload, '[Valid request!] - Offer is created.'));

        } catch (error) {

            const errors = errorMethodsObj.parseErrorsFn(error);

            return res.status(400)
                .json(responseFn(errors, '[Invalid request!] - Offer is not created!'))
        }
    }
}