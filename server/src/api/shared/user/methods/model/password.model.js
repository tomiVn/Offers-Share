export function passwordUserModelFn() {
    return {
        type:      String,
        trim:      true,
        required:  [true, 'Password is Required!'],
        minLength: [8, 'Password min length 8, max 16 characters!'],
        maxLength: [16,'Password min length 8, max 16 characters!'],
        validate:  [passwordValidationFn,
            'Your password is too easy to guess:' +
            'you can improve it by adding additional uppercase letters, lowercase letters, numbers and symbols.']
    }
}

function passwordValidationFn(password) {

    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    // Has minimum 8 characters in length. 
    // At least one uppercase English letter. 
    // At least one lowercase English letter.
    // At least one digit.
    // At least one special character.

    // Alternative withouth special character
    // ^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$
    return regex.test(password);
}

export function savePasswordFn(userModel, hash, SAULT_ROUNDS, errorMethodsObj) {

    userModel.pre('save', async function (next) {

        if (this.repeatPass) {

            if (this.password !== this.repeatPass) {

                errorMethodsObj.throwErrorFn('Passwords not match!');
            }

            next()
        }

        if (this.password) {

            this.password = await hash(this.password, SAULT_ROUNDS);
        }

        next();
    });
}

export function updatePasswordFn(userModel, hash, SAULT_ROUNDS) {
    userModel.pre(['updateOne', 'findOneAndUpdate', 'findByIdAndUpdate'],
        async function (next) {

            let user = this.getUpdate();

            if (user.password !== user.repeatPass) {

                errorMethodsObj.throwErrorFn('Passwords not match!');
                next()
            }

            if (user.password) {

                user.password =
                    await hash(user.password, SAULT_ROUNDS);
                this.setUpdate(user);
            }

            next();
        }
    );
}