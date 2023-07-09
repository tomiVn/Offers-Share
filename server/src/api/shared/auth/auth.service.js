import { BasicService } from "../../utils/services/basic.service.js";
import { sharedModels } from "../shared.models.js";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
import { dotenvPath } from "../../../var/dotenv.path.js";
// dotenv.config( { path: 'server/src/var/.env' } );

dotenv.config( { path: dotenvPath } );

const User = sharedModels.findModel('User');

class AuthService extends BasicService {

   constructor() {
      super(User)
   }

   createToken(user) {
      const { _id, name, role } = user

      const PAYLOAD = { _id, name, role };
      
      const TOKEN_EXP = { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME };

      return jwt.sign(PAYLOAD, process.env.SECRET_KEY, TOKEN_EXP);
   }

}

export const authServiceClass = new AuthService();