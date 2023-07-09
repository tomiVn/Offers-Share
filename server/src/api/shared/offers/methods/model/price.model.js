export function priceOfferModelFn() {
    return {
        type:     Number,
        required: [ true, 'Price is required'],
        min:      [0, 'Price must be a positive number!'] 
    }
}