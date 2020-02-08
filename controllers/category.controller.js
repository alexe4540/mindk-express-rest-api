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
    res.send(await new Category().update(req.params.id, req.body));
  }
  static async delete(req, res) {    
    res.send({
      object: await new Category().delete(req.params.id),
      success: true
    });
  }
}

module.exports = CategoryController;
