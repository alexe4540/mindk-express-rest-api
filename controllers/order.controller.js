const Order = require("../models/order");

class OrderController {
  static async index(req, res) {
    res.send(await new Order().getList());
  }
  static async create(req, res) {
    await new Order().create(req.body);
    res.send(`order ${req.body.o_id} added`);
  }
  static async read(req, res) {
    res.send(await new Order().find(req.params.id));
  }
  static update(req, res) {
    await new Order().update(req.params.id, req.body);
    res.send(`category ${req.params.id} updated`);
  }
  static async delete(req, res) {
    await new Order().delete(req.params.id);
    res.send(`Order ${req.params.id} deleted`);
  }
}

module.exports = OrderController;
