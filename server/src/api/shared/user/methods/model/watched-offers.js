export function watchedOffersUserModelFn(Schema) {
    
    return [{
        type: Schema.Types.ObjectId,
        ref: 'Offer'
    }]
}