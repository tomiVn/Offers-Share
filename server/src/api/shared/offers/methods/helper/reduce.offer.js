export function reduceOfferProperties(input) {

    const {
        title,
        image,
        description,
        price,
        fromDate,
        untilDate,
        creator,
        watchedList
    } = input;

    return Object.entries({
        title,
        image,
        description,
        price,
        fromDate,
        untilDate,
        creator,
        watchedList
    })
        .filter(([key, value]) => value !== undefined)
        .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
        }, {});
}