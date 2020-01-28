
const BaseModel = require('./base.model')

class Order extends BaseModel {
    constructor() {
        super('orders')
    }

    find(id){
        return super.find('o_id', id);
    }

    update(id, data){
        return super.update('o_id', id, data);
    }

    delete(id){
        return super.delete('o_id', id);
    }
}

module.exports = Order