export function descriptionOfferModelFn() {
    return {
        type:      String,
        trim:      true,
        required:  [true, 'Description is Required!'],
        minLength: [3, 'Description min length 3 characters!'],
        maxLength: [1250, 'Description max length 1250 characters!']
    }
}