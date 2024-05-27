const jwt = require('jsonwebtoken');
const {USER_TYPES} = require('../constants');
const asyncHandler = require('express-async-handler');

const verifyUserToken = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) return res.status(401).send("Access denied / Unauthorized request");

    try {
        token = token.split(' ')[1];

        if (token === 'null' || !token) {
            return res.status(401).send('Unauthorized request');
        }

        let verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);
        if (!verifiedUser) {
            return res.status(401).send('Unauthorized request');
        }

        req.user = verifiedUser;
        next();
    } catch(error) {
        res.status(400).send("Invalid Token");
    }
}

const isHost = asyncHandler(async (req, res, next) => {
    const {user_type} = req.user;
    if(user_type === USER_TYPES.host) {
        next();
    }
    return res.status(401).send("Unauthorized");
})

const isAdmin = asyncHandler(async (req, res, next) => {
    const {user_type} = req.user;
    if(user_type === USER_TYPES.admin) {
        next();
    }
    return res.status(401).send("Unauthorized");
})

module.exports = {
    verifyUserToken,
    isHost,
    isAdmin
};