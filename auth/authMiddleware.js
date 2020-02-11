const passport = require('./passport')
const Roles = require('./acl').Roles

// Request authentication middleware:
module.exports = function(req, res, next) {
    passport.authenticate('bearer', { session: false },
        (err, user, trace) => {
            // Bind user data to request:
            req.user = user || { role: Roles.GUEST }   

            next()
        })(req, res, next)
}