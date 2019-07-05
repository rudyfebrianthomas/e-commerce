const User = require('../models/user')
const {sign} = require('../helpers/jwt')
const {decrypt} = require('../helpers/bcrypt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class Controller {
    static register(req, res, next) {
        let data = {
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        User.create(data).
        then(resp => {
            res.status(201).json(resp)
        })
        .catch(next)
    }

    static login(req, res, next) {
        User
            .findOne({
                email: req.body.email
            })
            .then(resp => {
                if (resp) {
                    if (decrypt(req.body.password, resp.password)) {
                        let payload = {
                            id: resp._id,
                            userName: resp.userName,
                            email: resp.email,
                            role: resp.role
                        }
                        let token = sign(payload)
                        res.status(200).json({
                            token
                        })
                    } else {
                        throw ({
                            status: 400,
                            message: "Email/Password wrong"
                        })
                    }
                } else {
                    throw ({
                        status: 404,
                        message: "Email/Password wrong"
                    })
                }
            })
            .catch(next)
    }

    static googlesignin(req, res, next) {
        client
            .verifyIdToken({
                idToken: req.body.idToken,
                audience: process.env.GOOGLE_CLIENT_ID,
            })
            .then(function (ticket) {
                const ticketpayload = ticket.getPayload()
                let data = {
                    userName: ticketpayload.name,
                    email: ticketpayload.email,
                    password: "hehe"
                }

                return User
                    .findOne({
                        email: ticketpayload.email
                    })
            })
            .then(resp => {
                if (resp) {
                    if (decrypt(data.password, resp.password)) {
                        let payload = {
                            id: resp._id,
                            userName: resp.userName,
                            email: resp.email
                        }
                        let token = sign(payload)
                        res.status(200).json({
                            token,
                            userName: resp.userName
                        })
                    } else {
                        throw ({
                            status: 400,
                            message: "Email/Password wrong"
                        })
                    }
                } else {
                    return User
                        .create(data)
                }
            })
            .then(resp => {
                let payload = {
                    id: resp._id,
                    userName: resp.userName,
                    email: resp.email
                }
                let token = sign(payload)
                res.status(200).json({
                    token
                })
            })
            .catch(next)
    }
}

module.exports = Controller