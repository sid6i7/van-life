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
        id: user._id,
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
            id: user._id,
        };

        const token = jwt.sign(payload, process.env.TOKEN_SECRET);
        console.log(token);
        res.status(200).header("auth-token", token).send({"token": token});

    } catch(err) {
        throw err;
    }
})

const getUser = asyncHandler(async (req, res) => {
    let token = req.headers.authorization;

    if(!token) {
        res.status(400);
        throw new Error("Unauthorized");
    }
    token = token.split(" ")[1];
    
    const {id} = jwt.decode(token);
    let user = await User.findById(id).select(['-password', '-_id']);
    if(!user) {
        res.status(401);
        throw new Error("Could not find user");
    }

    res.status(200).json(user);
})

module.exports = {
    register,
    login,
    getUser
}