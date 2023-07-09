export function imageOfferModelFn() {
    return {
        type: String,
        default: 'https://res.cloudinary.com/duyubdgsj/image/upload/v1670590742/assets/no-image-available_hga1ag.jpg',
        validate: [httpValidationFn, 'Url is not valid!']
    }
}

function httpValidationFn(value) {

    let regex = new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)
    
    return regex.test(value);
}