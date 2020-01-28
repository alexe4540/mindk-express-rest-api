const User = require("../models/users");

class UserController {
  static async index(req, res) {
    res.send(await new User().getList());
  }
  static async create(req, res) {
    await new User().create(req.body)
    res.send(`user ${req.body.name} added`);
  }
  static async read(req, res) {
    res.send(await new User().find(req.params.id));
  }
  static update(req, res) {
    await new User().update(req.params.id, req.body);
    res.send(`user ${req.params.id} updated`);
  }
  static async delete(req, res) {
    await new User().delete(req.params.id)
    res.send(`user ${req.params.id} deleted`);
  }
}

module.exports = UserController;
