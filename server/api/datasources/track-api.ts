const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.hatchways.io/assessment/students";
  }

  getStudents() {
    return this.get("/");
  }
}

module.exports = TrackAPI;
