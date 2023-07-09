export function bornModelFn() {

    const now     = new Date();
    const min_age = new Date(now.getFullYear() - 12, now.getMonth(), now.getDay());
    const max_age = new Date(now.getFullYear() - 100, now.getMonth(), now.getDay())

    return {
        type: Date,
        trim: true,
        min:  [max_age, 'We expect visitors younger than 100 age, to make registration and use our system!'],
        max:  [min_age, 'We expect visitors older than 12 age, to make registration and use our system!']      
    }
}
// /^(?:\d{4})-(?:\d{2})-(?:\d{2})T(?:\d{2}):(?:\d{2}):(?:\d{2}(?:\.\d*)?)(?:(?:-(?:\d{2}):(?:\d{2})|Z)?)$/