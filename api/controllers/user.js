// /user requests are forwarded to these endpoints from the relevant routes file
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = (req, res, next) => { // add a new user into the system
    if (req.body.email !== undefined && req.body.password !== undefined) {
        User.find({email: req.body.email})
            .exec()
            .then(user => {
                if (user.length >= 1) { //check for existing mails
                    return res.status(409).json({
                        message: "Mail exists"
                    });
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            });
                        } else {
                            const user = new User({
                                _id: new mongoose.Types.ObjectId(),
                                email: req.body.email,
                                password: hash
                            });
                            user
                                .save()
                                .then(result => {
                                    res.status(201).json({
                                        message: "User created"
                                    });
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        error: err
                                    });
                                });
                        }
                    });
                }
            });
    } else {
        res.status(500).json({
            error: 'Required attributes are missing'
        });
    }
};

exports.user_login = (req, res, next) => { //log a user into the system
    if (req.body.email !== undefined && req.body.password !== undefined) {
        User.find({email: req.body.email})
            .exec()
            .then(user => {
                if (user.length < 1) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                bcrypt.compare(req.body.password, user[0].password, (err, result) => { //check for user password
                    if (err) {
                        return res.status(401).json({
                            message: "Auth failed"
                        });
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                email: user[0].email,
                                userId: user[0]._id
                            },
                            "SECRET",
                            {
                                expiresIn: "1h" //set the expiry time for token
                            }
                        );
                        return res.status(200).json({  //send the token back to the user
                            message: "Auth successful",
                            token: token
                        });
                    }
                    res.status(401).json({
                        token: "Auth failed"
                    });
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    } else {
        res.status(500).json({
            error: 'Required attributes are missing'
        });
    }
};

exports.user_delete = (req, res, next) => { // delete a user in the system
    User.remove({_id: req.params.userId})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "User deleted"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.user_get_userInfo = (req, res, next) => { //get a user's details
    User.findById(req.params.userId)
        .exec()
        .then(user => {
            if (!user) {
                res.status(404).json({
                    message: "User not found"
                });
            }
            res.status(200).json({
                user: user,
                request: {
                    type: "GET",
                    url: "http://localhost:3000/user/" + user._id
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};
