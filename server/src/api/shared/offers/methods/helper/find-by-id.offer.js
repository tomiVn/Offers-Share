
export async function findByIdOffer(req, res, _optionsObj, offerService, errorMethodsObj, responseFn, _id) {

    const _filter = { _id };

    let offer = await offerService.findOne(_filter, _optionsObj);

    if (!offer) {

        errorMethodsObj.throwErrorFn(`[URL Error] - We can't find offer with this id ${_id}`);
    }

    return res.status(200)
        .json(responseFn(offer, '[Valid request!] - Offer/s found.'));
}