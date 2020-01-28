
const BaseModel = require('./base.model')

class User extends BaseModel {
    constructor() {
        super('users')
    };

    find(id){
        return super.find('user_id', id);
    }

    update(id, data){
        return super.update('user_id', id, data);
    }
    
    delete(id){
        return super.delete('user_id', id);
    }
}

module.exports = User