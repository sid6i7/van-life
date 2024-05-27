const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const register = asyncHandler(async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    let user = null;
    
    try {
        user = await User.create({
            email: req.body.email,
            name: req.body.name,
            password: hashPassword,
            user_type: req.body.user_type
        });
    } catch(err) {
        res.status(400);
        return res.json({
            'error': err
        });
    }

    let payload = {
        email: user.email,
        name: user.name,
        id: user._id,
        user_type: user.user_type
    };

    const token = jwt.sign(
        payload,
        process.env.TOKEN_SECRET
    );
    res.status(200).send({ token });
})

const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) {
            res.status(400);
            throw new Error("No user found");
        }
        const validPass = await bcrypt.compare(password, user.password);
        if(!validPass) {
            return res.status(401).send("Email or password is wrong");
        }

        let payload = {
            email: user.email,
            name: user.name,
            id: user._id,
            user_type: user.user_type
        };

        const token = jwt.sign(payload, process.env.TOKEN_SECRET);
        res.status(200).header("auth-token", token).send({"token": token});

    } catch(err) {
        throw err;
    }
})

module.exports = {
    register,
    login
}