import { RESTDataSource } from "apollo-datasource-rest";
class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.hatchways.io/assessment/students";
  }

  getStudents() {
    return this.get("/");
  }
}

export default TrackAPI;
