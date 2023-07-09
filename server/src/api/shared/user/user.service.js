import { BasicService } from "../../utils/services/basic.service.js";
import { sharedModels } from "../shared.models.js";

const User = sharedModels.findModel('User');

class UserService extends BasicService {

   constructor() {

      super(User);
   }

}

export const userServiceClass = new UserService();