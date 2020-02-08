const serviceLocator = require("../services/service.locator");

class BaseModel {
  constructor(tableName) {
    this.table = serviceLocator.get("db").table(tableName);
  }

  getList() {
    return this.table.select("*");
  }

  find(columName, id) {
    return this.table
      .select("*")
      .where(columName, id);
  }

  create(data){
    return this.table
      .returning('*')
      .insert(data);
  }

  update(columName, id, data){
    return this.table
      .returning('*')
      .where(columName, id)
      .update(data);
  }

  delete(columName, id) {
    return this.table
      .where(columName, id)
      .del();
  }
}

module.exports = BaseModel;
