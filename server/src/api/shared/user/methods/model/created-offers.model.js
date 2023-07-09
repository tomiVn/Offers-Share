export function createdOffersUserModelFn(Schema) {
    return [{
        type: Schema.Types.ObjectId,
        ref:  'Offer'
    }]
}