
export function payload(user, token) {

    return { 

        _id: user._id, 
        name: user.name, 
        role: user.role, 
       token 
    }
}