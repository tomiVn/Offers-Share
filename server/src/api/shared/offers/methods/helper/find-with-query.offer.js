
export async function findWithQuery(req, res, _optionsObj, offerService, errorMethodsObj, responseFn) {

    const _limit = parseInt(req?.query?.limit) || null;

    const _offset = parseInt(req?.query?.skip) || null;

    _optionsObj = Object.assign(_optionsObj, { _limit, _offset});

    const date = new Date(req?.query?.date);

    if (!isNaN(date)) {

        _optionsObj = Object.assign(_optionsObj,
            { _where: { fromDate: { $lte: date }, untilDate: { $gte: date } } })

        const data = await offerService.find({}, _optionsObj);

        if (!data[0]) {
            errorMethodsObj.throwErrorFn(`[URL Error] - We can't find offer with this date: ${date}`);
        }

        return res.status(200)
            .json(responseFn(data, '[Valid request!] - Offer/s found.'));

    }

    const data = await offerService.find({}, _optionsObj);

    if (!data[0]) {

        errorMethodsObj.throwErrorFn(`[URL Error] - We can't find offer/s`);
    }

    return res.status(200)
        .json(responseFn(data, '[Valid request!] - Offer/s found.'));

}