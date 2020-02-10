const serviceLocator = require("../services/service.locator");

class BaseModel {
  constructor(tableName, primaryKeyName = 'id') {
    this.table = serviceLocator
      .get("db")
      .table(tableName);
    this.primaryKeyName = primaryKeyName;
  }

  getList() {
    return this.table.select("*");
  }

  find(id) {
    return this.table
      .select("*")
      .where(this.primaryKeyName, id);
  }

  create(data){    
    return this.table
      .returning('*')
      .insert(data);
  }

  update(id, data){
    return this.table
      .returning('*')
      .where(this.primaryKeyName, id)
      .update(data);
  }

  delete(id) {
    return this.table
      .returning('*')
      .where(this.primaryKeyName, id)
      .del();
  }
}

module.exports = BaseModel;
