export function titleOfferModelFn() {
    return {
        type:      String,
        required:  [true, 'Title is Required!'],
        minLength: [3, 'Please write title again! Requirement length min 3, max 35 characters!'],
        maxLength: [35, 'Please write title again! Requirement length min 3, max 35 characters!']
    }
}