export function watchListOfferModelFn(Schema) {
    return [{
        trim: true,
        type: Schema.Types.ObjectId,
        ref: 'User'      
    }]
}