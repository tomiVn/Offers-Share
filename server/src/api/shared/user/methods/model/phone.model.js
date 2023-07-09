export function phoneUserModelFn() {
    return {
        type:      String,
        trim:      true,
        minLength: [6, 'Phone number must be at least 6 characters!'],
        maxLength: [12, 'Phone number must be at least 12 characters!'],
        validate:  [phoneRegexValidationFn,
            'Please write phone number again! Use numbers, dash and white space.']
    }
}

function phoneRegexValidationFn(value) {
    let regex = new RegExp(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g)
    return regex.test(value)
}