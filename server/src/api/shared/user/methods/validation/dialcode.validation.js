import fs from "fs"

export function dialCodeValidationFn(check) {

    return check('dial_code', 'Dial code is not valid!!!')
    
        .optional({ nullable: true, checkFalsy: true })
        .isIn(dialcodesArray())
        .unescape()
        .escape()
}

function dialcodesArray() {
    
    const file_path = './src/assets/data/countrie-codes.json'
    let data = JSON.parse(fs.readFileSync(file_path, 'utf8'));
    return Object.values(data).map(country => country.dial_code);
}