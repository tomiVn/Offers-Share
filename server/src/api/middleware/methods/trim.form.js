export function trimForm(req, _, next) {

    try {

        for (key in req.body) {
            req.body[key] = req.body[key].trim();
        }

    } catch (err) {
        throw { status: 404, message: err.message }
    }

    next()
}