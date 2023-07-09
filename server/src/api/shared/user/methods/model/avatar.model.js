export function avatarUserModelFn() {
    return {
        type:     String,
        default: 'https://res.cloudinary.com/duyubdgsj/image/upload/v1669408328/assets/146-1468479_my-profile-icon-blank-profile-picture-circle-hd_qsgtou.png',
        trim:     true,
        validate: [httpValidationFn, 'Url is not valid!']
    }
}

function httpValidationFn(value) {

    let regex = new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)
    
    return regex.test(value);
}

// regex withot protocol /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/