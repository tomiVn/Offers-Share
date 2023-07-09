export function endDateOfferModelFn() {
    return {
        trim:     true,
        type:     Date,
        required: [ true, 'Last day off offer is required'], 
    }
}

export function saveEndDateFn(offerModel, errorMethodsObj) {

    offerModel.pre('save', async function (next) {

        if (this.fromDate >= this.untilDate) {

            errorMethodsObj.throwErrorFn('Until date must be a greater than from date!');
            next()
        }
        next();
    });
}