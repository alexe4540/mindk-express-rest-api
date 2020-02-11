
const BaseModel = require('./base.model')

class Product extends BaseModel {
    constructor() {
        super('products', 'p_id')
    }
}

module.exports = Product