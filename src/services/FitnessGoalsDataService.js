import http from "../http-common";

class FitnessGoalsDataService {
  getAll() {
    return http.get("/fitness-goals");
  }

  get(id) {
    return http.get(`/fitness-goals/${id}`);
  }

  create(data) {
    return http.post("/fitness-goals", data);
  }

  update(id, data) {
    return http.put(`/fitness-goals/${id}`, data);
  }

  delete(id) {
    return http.delete(`/fitness-goals/${id}`);
  }

  //findByTitle(title) {
  //  return http.get(`/tutorials?title=${title}`);
  //}
}

export default new FitnessGoalsDataService();
