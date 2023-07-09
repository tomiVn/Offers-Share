export function emailUserModelFn(_validate) {
    return {
        type:      String,
        trim:      true,
        required:  [true, 'Email is Required!'],
        minLength: [ 6,   'Email must be min 6 characters, max 100!'],
        maxLength: [100,  'Email must be min 6 characters, max 100!'],
        index: {
            unique: true,
            partialFilterExpression: { deleted: false }
        },
        validate: { validator: _validate, message: 'Email Address is not valid!' }
    }
}

// most used regex /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/