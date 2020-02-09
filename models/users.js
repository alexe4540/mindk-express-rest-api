
const BaseModel = require('./base.model')
const md5 = require('md5');

class User extends BaseModel {
    constructor() {
        super('users', 'user_id')
    };

    /**
     * Get user by user name and password
     * 
     * @param username
     * @param password
     * @returns {null}
     */
    getUserByCredentials(username, password){
        return this.table
            .select(['user_id', 'email', 'name'])
            .where('email', username)
            .andWhere('pass', md5(password))
            .first()
    }


}

module.exports = User