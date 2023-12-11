import http from "../http-common";

class ActivitiesDataService {
  getAll() {
    return http.get("/activities");
  }

  get(id) {
    return http.get(`/activities/${id}`);
  }

  create(data) {
    return http.post("/activities", data);
  }

  update(id, data) {
    return http.patch(`/activities/${id}`, data);
  }

  delete(id) {
    return http.delete(`/activities/${id}`);
  }

  //findByTitle(title) {
  //  return http.get(`/tutorials?title=${title}`);
  //}
}

export default new ActivitiesDataService();
