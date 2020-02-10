const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy
const uuidv4 = require('uuid/v4')
const User = require('../models/users')
//const Roles = require('./acl').Roles

passport.use(new LocalStrategy(
    async function(username, password, done) {
        const UserModel = new User();
        const user = await UserModel.getUserByCredentials(username, password) ;

        if(!user) {
            // return error
            return done('Something wrong', false)
        }

        // Generate token
        user.token = uuidv4()
        await UserModel.update(user.user_id ,user)

        return done(null, user)
    }
));

passport.use(new BearerStrategy(
    async function(token, done) {
        const UserModel = new User()
        const user = await UserModel.getUserByToken(token)

        if(!user) {
            // return error
            return done(null, { role: Roles.GUEST})
        }

        return done(null, user)
    }
));

module.exports = passport