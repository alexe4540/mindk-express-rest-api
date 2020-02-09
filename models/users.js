
const BaseModel = require('./base.model')

class User extends BaseModel {
    constructor() {
        super('users', 'user_id')
    };
}

module.exports = User