import { BasicService } from "../../utils/services/basic.service";
import { sharedModels }  from "../shared.models.js";

class NewService extends BasicService{

    constructor() {
        super(sharedModels.findModel('User'))
     }

}

import { BasicService } from "../../utils/services/basic.service.js";
import { sharedModels } from "../shared.models.js";
import jwt from "jsonwebtoken"

const User = sharedModels.findModel('User');

// class AuthService extends BasicService{

//    constructor() {
//       super(sharedModels.findModel('User'))
//    }

//    async logIn(email, password) {

//       let query = await User.findOne({ email })
//          .select(['_id', 'name', 'password', 'role'])

//       if (!query) {
//          return
//       }

//       let validPassword = await query.validatePassword(password);

//       if (validPassword) {

//          let { _id, name, role } = query;

//          return {
//             name,
//             token: createToken(_id, name, role)
//          }
//       }
//    }

//    async register(name, email, password) {

//       let query = await User.findOne({ email }).select(['_id']);

//       if (query) {
//          return null;
//       }

//       let user = await User.create({ name, email, password });

//       return {
//          name: user.name,
//          token: createToken(user._id, user.name, user.role)
//       }
//    }
// }

// export const authServiceClass = new AuthService();

// function createToken(id, name, role) {

//    const PAYLOAD = { id, name, role };

//    const TOKEN_EXP = { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME };

//    return jwt.sign(PAYLOAD, process.env.SECRET_KEY, TOKEN_EXP);
// } 