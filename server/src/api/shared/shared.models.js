import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import { validate as email_validator } from "email-validator";

import { SAULT_ROUNDS } from '../../config/bcript.config.js';
import { createUserModel } from "./user/user.model.js";
import { createOfferModel } from "./offers/offer.model.js";
import { errorMethodsObj } from '../utils/errors/errors.methods.js';

const User =
    createUserModel
        (Schema, model, hash, compare, email_validator, SAULT_ROUNDS, errorMethodsObj);

const Offer =
    createOfferModel(Schema, model);

export const sharedModels = Object.freeze({

    models: [
        User,
        Offer
    ],

    findModel(modelName) {

        return this.models.find(obj => obj.modelName == modelName);
    }
})

