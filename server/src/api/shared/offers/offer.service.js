import { BasicService } from "../../utils/services/basic.service.js";
import { sharedModels }  from "../shared.models.js";

class OfferService extends BasicService {

   constructor() {
      super(sharedModels.findModel('Offer'))
   }

}

export const offerService = new OfferService();