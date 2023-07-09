export function creatorOfferModelFn(Schema) {
    return {
        trim:    true,
        require: true,
        type:    Schema.Types.ObjectId,
        ref:     'User'      
    }
}