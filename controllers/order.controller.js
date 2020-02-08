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
    res.send(await new Order().update(req.params.id, req.body));
  }
  static async delete(req, res) {
    res.send({
      object: await new Order().delete(req.params.id),
      success: true
    });
  }
}

module.exports = OrderController;
