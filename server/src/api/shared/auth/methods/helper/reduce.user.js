export function reduceUserProperties(input) {

    const {
        name,
        email,
        password,
        repeatPass,
        role,
        gender,
        born,
        avatar,
        dial_code,
        phone,
        created_offers
    } = input;

    return Object.entries({
        name,
        email,
        password,
        repeatPass,
        role,
        gender,
        born,
        avatar,
        dial_code,
        phone,
        created_offers
    })
        .filter(([key, value]) => value !== undefined)
        .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
        }, {});
}