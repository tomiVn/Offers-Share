import { creatorOfferModelFn } from "./methods/model/creator.model.js";
import { descriptionOfferModelFn } from "./methods/model/description.model.js";
import { startDateOfferModelFn } from "./methods/model/start-date.model.js";
import { imageOfferModelFn } from "./methods/model/image.model.js";
import { priceOfferModelFn } from "./methods/model/price.model.js";
import { titleOfferModelFn } from "./methods/model/title.model.js";
import { endDateOfferModelFn, saveEndDateFn } from "./methods/model/end-date.model.js";
import { errorMethodsObj } from "../../utils/errors/errors.methods.js";
import { watchListOfferModelFn } from "./methods/model/watch-list.model.js";

export function createOfferModel(Schema, model) {
    
    const offerModel = new Schema({

        title:           titleOfferModelFn(),
        image:           imageOfferModelFn(),
        description:     descriptionOfferModelFn(),
        price:           priceOfferModelFn(),
        fromDate:        startDateOfferModelFn(),
        untilDate:       endDateOfferModelFn(),
        creator:         creatorOfferModelFn(Schema),
        watchedList:     watchListOfferModelFn(Schema)
    });

    saveEndDateFn(offerModel, errorMethodsObj);
    
    offerModel.set('timestamps', true);//To have 

    return model('Offer', offerModel);
}
