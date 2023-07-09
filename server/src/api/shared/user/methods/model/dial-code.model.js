import fs from "fs";

export function dialCodeUserModelFn() {
    return {
        type:     String,
        trim:     true,
        validate: [dialcodeValidateFn,
            (err) => err.value + ' is not valid dial country code!']
    }
}

function dialcodeValidateFn(value) {

    const path = './src/assets/data/countrie-codes.json';
    let data   = JSON.parse(fs.readFileSync(path, 'utf8'));

    return !!data.find(country => country.dial_code == value);
}