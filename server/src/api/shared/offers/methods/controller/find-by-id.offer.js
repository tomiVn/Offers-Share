export function findByIdOffer(offerService, errorMethodsObj, responseFn) {

    return async (req, res) => {

        try {

            const _id = req?.params?.id;

            if ( _id == undefined || _id == null ) {

                errorMethodsObj.throwErrorFn(`[URL Error] - We expect offer ID in URL!`);
            }

            let _optionsObj = {

                _populate: {
                    path: 'creator',
                    select: ['_id','name', 'created_offers'],
                },
            }
           
            const _filter = { _id };
            
            let offer = await offerService.findOne( _filter, _optionsObj);

            if (!offer) {

                errorMethodsObj.throwErrorFn(`[URL Error] - We can't find offer with this id ${_id}`);
            }
            
            return res.status(200)
                .json(responseFn(offer, '[Valid request!] - Offer/s found.'));

        } catch (error) {

            const errors = errorMethodsObj.parseErrorsFn(error);

            return res.status(400)
                .json(responseFn(errors, '[Invalid request!] - Offer/s not found!'))
        }
    }
}