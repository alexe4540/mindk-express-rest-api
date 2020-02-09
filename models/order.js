
const BaseModel = require('./base.model')

class Order extends BaseModel {
    constructor() {
        super('orders', 'o_id')
    }
}

module.exports = Order