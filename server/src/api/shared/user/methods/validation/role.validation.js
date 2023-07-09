import { ROLES } from "../../../../utils/const/role.const.js"

export function roleValidationFn(check) {

    return check('role', 'Role is not valid!')

        .optional({ nullable: true, checkFalsy: true })

        .isIn(ROLES).withMessage('This Role is not in our List!')

        .escape()
}