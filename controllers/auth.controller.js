const passport = require('../auth/passport');

class AuthController{
    static login(req, res){
        passport.authenticate('local', {session: false}, function(err, user, trace){
            //В этом решении вообще не уверен, но пришлось так сделать так как через throw ошибка убивала весь 
            //процес не попадая в роутер для отлова ошибок
            if(err){
                res.send({
                    message: err.toString()
                })
            }
            res.send(user)
        })(req, res)        
    }
}

module.exports = AuthController;