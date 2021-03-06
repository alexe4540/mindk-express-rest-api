const User = require("../models/users");

class UserController {
  static async index(req, res) {
    res.send(await new User().getList());
  }
  static async create(req, res) {
    res.send(await new User().create(req.body));
  }
  static async read(req, res) {
    res.send(await new User().find(req.params.id));
  }
  static async update(req, res) {    
    res.send(await new User().update(req.params.id, req.body));
  }
  static async delete(req, res) {    
    res.send({
      object: await new User().delete(req.params.id),
      success: true
    });
  }
}

module.exports = UserController;
