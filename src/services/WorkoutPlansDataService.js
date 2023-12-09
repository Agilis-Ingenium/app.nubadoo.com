import http from "../http-common";

class WorkoutPlansDataService {
  getAll() {
    return http.get("/workout-plans");
  }

  get(id) {
    return http.get(`/workout-plans/${id}`);
  }

  create(data) {
    return http.post("/workout-plans", data);
  }

  update(id, data) {
    return http.put(`/workout-plans/${id}`, data);
  }

  delete(id) {
    return http.delete(`/workout-plans/${id}`);
  }

  //findByTitle(title) {
  //  return http.get(`/tutorials?title=${title}`);
  //}
}

export default new WorkoutPlansDataService();
