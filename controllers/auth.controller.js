const passport = require("../auth/passport");
const User = require("../models/users");
const md5 = require("md5");

class AuthController {
  static login(req, res, next) {
    passport.authenticate("local", { session: false }, function(err, user, trace ) {
      if (err) {
        return next(new Error(err.toString()));
      }
      res.send(user);
    })(req, res, next);
  }

  static async register(req, res, next) {
    // TODO Implement this
    const UserModel = new User();
    const user = req.body;
    const userExist = await UserModel.isExist(user.username);
    const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[-_0-9a-zA-Z]{8,}$/;

    if (userExist) {
      return next(new Error("User with this username alreade exist"));
    }

    if (!user.password.match(pass)){
        return next(new Error("Password must be at least 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit."));
    } 

    user.password = md5(user.password);
    
    let newUser =  await UserModel.create(user);

    res.send(newUser);
  }


}

module.exports = AuthController;
