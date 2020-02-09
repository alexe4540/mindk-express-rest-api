const BaseModel = require('./base.model')

class Category extends BaseModel {
    constructor() {
        super('category', 'c_id');
    }
}

module.exports = Category;