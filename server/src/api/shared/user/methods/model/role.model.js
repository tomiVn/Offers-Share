import { ROLES } from "../../../../utils/const/role.const.js";

export function roleUserModelFn() {
    return {
        type:     String,
        trim:     true,
        required: [true, 'Role is Required!'],
        enum:     ROLES,
        default: 'user',
        message: 'Not valid role!'
    }
}