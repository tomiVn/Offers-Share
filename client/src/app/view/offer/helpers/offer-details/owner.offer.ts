export function isOwner(creator: any, currentUser: any) {

    const userId = currentUser?._id;

    if (creator && creator._id === undefined) {

        return userId.toString() === creator.toString();
    }

    if (!userId || !creator?._id) {
        return false;
    }
    return userId.toString() === creator._id.toString();

}