const BaseModel = require('./base.model')

class Category extends BaseModel {
    constructor() {
        super('category');
    }

    find(id){
        return super.find('c_id', id);
    }

    update(id, data){
        return super.update('c_id', id, data);
    }

    delete(id){
        return super.delete('c_id', id);
    }
}

module.exports = Category;