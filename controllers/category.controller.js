const Category = require("../models/category");

class CategoryController {
  static async index(req, res) {
    res.send(await new Category().getList());
  }
  static async create(req, res) {
    res.send(await new Category().create(req.body));
  }
  static async read(req, res) {
    res.send(await new Category().find(req.params.id));
  }
  static async update(req, res) {
    await new Category().update(req.params.id, req.body);
    res.send(`category ${req.params.id} updated`);
  }
  static async delete(req, res) {
    await new Category().delete(req.params.id);
    res.send(`category ${req.params.id} deleted`);
  }
}

module.exports = CategoryController;
