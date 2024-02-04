const db = require('../db.js');
const Utils = require('../Utils.js');

module.exports = async function (req, res, next) {
    const email = req.query.email;
    const password = req.query.password;
    if (email == 'matthieu@bcp.org' && password == 'test') {
        let token = Utils.createToken(0, email, "admin");
        Utils.sendResult(res, {
            token: token
        });

    }
    else {
        Utils.sendError(res, "Invalid username or password");
    }
}