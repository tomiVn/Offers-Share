export function contactsOfferModelFn() {
    return {
        type: String,
        
            required: [ true, 'Contact information is required'],
           minLength: [ 6,    'Contact information must be min 6 characters, max 250!'],
           maxLength: [250,   'Contact information must be min 6 characters, max 250!']
    }
}