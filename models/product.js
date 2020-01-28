
const BaseModel = require('./base.model')

class Product extends BaseModel {
    constructor() {
        super('products')
    }

    find(id){
        return super.find('p_id', id);
    }

    update(id, data){
        return super.update('p_id', id, data);
    }

    delete(id){
        return super.delete('p_id', id);
    }
}

module.exports = Product