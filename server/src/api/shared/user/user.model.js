import { nameUserModelFn } from "./methods/model/name.model.js";
import { emailUserModelFn } from "./methods/model/email.model.js";
import {
    passwordUserModelFn,
    savePasswordFn,
    updatePasswordFn
} from "./methods/model/password.model.js";
import { roleUserModelFn } from "./methods/model/role.model.js";
import { genderModelFn } from "./methods/model/gender.model.js";
import { bornModelFn } from "./methods/model/born.model.js";
import { dialCodeUserModelFn } from "./methods/model/dial-code.model.js";
import { avatarUserModelFn } from "./methods/model/avatar.model.js";
import { phoneUserModelFn } from "./methods/model/phone.model.js";
import { createdOffersUserModelFn } from "./methods/model/created-offers.model.js";
import { watchedOffersUserModelFn } from "./methods/model/watched-offers.js";

export function createUserModel
    (
        Schema,
        model,
        hash,
        compare,
        email_validator,
        SAULT_ROUNDS,
        errorMethodsObj
    ) {

    const userModel = new Schema({

        name:              nameUserModelFn(),
        email:             emailUserModelFn(email_validator),
        password:          passwordUserModelFn(),
        role:              roleUserModelFn(),
        gender:            genderModelFn(),
        born:              bornModelFn(),
        avatar:            avatarUserModelFn(),
        dial_code:         dialCodeUserModelFn(),
        phone:             phoneUserModelFn(),
        created_offers:    createdOffersUserModelFn(Schema),
        watched_offers:    watchedOffersUserModelFn(Schema)

    });

    savePasswordFn(userModel, hash, SAULT_ROUNDS, errorMethodsObj);

    updatePasswordFn(userModel, hash, SAULT_ROUNDS);

    userModel.index({ email: 1 }, { collation: { locale: 'en', strength: 2 } });

    userModel.method('validatePassword', function (password) {

        return compare(password, this.password);
    });

    userModel.set('timestamps', true);//To have 
    userModel.set('strict', true);
    return model('User', userModel);
}