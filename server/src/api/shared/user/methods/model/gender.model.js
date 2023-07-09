export function genderModelFn() {
    return {
        type:    String,
        trim:    true,
        enum:    ['male', 'female', 'undefined'],
        default: 'undefined',
        message: 'Not valid gender option!'
    }
}