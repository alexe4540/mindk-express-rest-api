const Product = require("../models/product");

class ProductController {
  static async index(req, res) {
    res.send(await new Product().getList());
  }
  static async create(req, res) {
        res.send(await new Product().create(req.body));
  }
  static async read(req, res) {
    res.send(await new Product().find(req.params.id));
  }
  static async update(req, res) {
    res.send(await new Product().update(req.params.id, req.body));
  }
  static async delete(req, res) {
    await new Product().delete(req.params.id);
    res.send(`Product ${req.params.id} deleted`);
  }
}

module.exports = ProductController;
