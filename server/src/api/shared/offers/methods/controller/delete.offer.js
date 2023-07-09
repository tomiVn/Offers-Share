
export function deleteOffer(offerService, errorMethodsObj, responseFn , cloudinary) {

    return async (req, res) => {

        try {

            if (!req?.params?.id) {

                errorMethodsObj.throwErrorFn('[Search error] - We need offer ID!')
            }

            const filter = { _id: req.params.id };

            const options = {

                _select: ['creator'],

                _populate: {
                    path: 'creator',
                    select: ['_id', 'name'],
                }
            }

            const offer = await offerService.findOne(filter, options);

            if (!offer) {
                errorMethodsObj.throwErrorFn(`[Search error] - There is no exist offer with id - ${req.params.id}`);
            }

            // if (offer.creator._id !== req.user.id) {
            //     errorMethodsObj.throwErrorFn(`[Athorization error] - you can't delete offer with id - ${req.params.id}`);
            // }

            await offerService.delete(filter);

            return res.status(200)
                .json(responseFn({message: '[Valid request!] - Offer is deleted.'}, '[Valid request!] - Offer is deleted.'));

        } catch (error) {

            const errors = errorMethodsObj.parseErrorsFn(error);

            return res.status(400)
                .json(responseFn(errors, '[Invalid request!] - Offer is not deleted!'))
        }

    }
}