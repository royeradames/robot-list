import { RESTDataSource } from "apollo-datasource-rest";
class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.hatchways.io/assessment/students";
  }

  async getAllStudents() {
    const allStudents = await this.get("/");
    return allStudents?.students;
  }
}

export default TrackAPI;
