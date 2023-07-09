export function nameUserModelFn() {
    return {
        type:      String,
        default:  'anonymous',
        trim:      true,
        minLength: [3,   'Name must be at least 3 characters, max 100!'],
        maxLength: [100, 'Name must be at least 3 characters, max 100!'],
        validate:  [nameValidationFn, 'Please write Name again using alphabetic letters start with uppercase!']
    }
}

function nameValidationFn(name) {

    const regex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)( [IVXLCDM]+)?$/;
    
    return regex.test(name);
}