const JWT = require('./jwt')

exports.authCheck = async (req, res, next) => {
    let token = req.body.token || req.headers.authorization
    try {
        if (typeof token !== 'undefined') {
            const bearer = token.split(' ');
            const bearerToken = bearer[1];
            console.log(bearerToken)
            let decoded = await JWT.verifyToken(bearerToken)
            if (decoded) {
                req.decoded = decoded
                next()
            } else {
                res.status(400).json({ success: false, message: 'Token not valid.', expired: true })
            }
        } else {
            res.status(403).send({
                success: false,
                message: 'No token provided'
            })
        }
    } catch(e) {
        console.log(e)
        res.status(400).json({ success: false, message: 'auth check error / token expired' })
    }
}