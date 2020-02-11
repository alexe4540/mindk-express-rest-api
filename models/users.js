
const BaseModel = require('./base.model')
const md5 = require('md5');

class User extends BaseModel {
    constructor() {
        super('users', 'user_id')
    };

    /**
     * Get user by username and password
     * 
     * @param username
     * @param password
     * @returns {null}
     */
    getUserByCredentials(username, password){
        return this.table
            .select(['user_id', 'username', 'name'])
            .where('username', username)
            .andWhere('password', md5(password))
            .first()
    }

    /**
     * Get user with token
     * 
     * @param token
     * @returns {null}
     */
    getUserByToken(token){
        return this.table
            .select(['role', 'name', 'username', 'user_id'])
            .where('token', token)
            .first()
    }

    /**
     * Check does user exist
     * 
     * @param username
     * @returns {}
     */
    isExist(username){
        return this.table
        .select('username')
        .where('username', username)
        .first()
    }
}

module.exports = User