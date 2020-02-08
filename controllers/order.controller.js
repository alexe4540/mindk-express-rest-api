const Order = require("../models/order");

class OrderController {
  static async index(req, res) {
    res.send(await new Order().getList());
  }
  static async create(req, res) {    
    res.send(await new Order().create(req.body));
  }
  static async read(req, res) {
    res.send(await new Order().find(req.params.id));
  }
  static async update(req, res) {
    await new Order().update(req.params.id, req.body);
    res.send(`category ${req.params.id} updated`);
  }
  static async delete(req, res) {
    await new Order().delete(req.params.id);
    res.send(`Order ${req.params.id} deleted`);
  }
}

module.exports = OrderController;
