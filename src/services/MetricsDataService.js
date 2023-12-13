import http from "../http-common";

class MetricsDataService {
  getAll() {
    return http.get("/metrics");
  }

  get(id) {
    return http.get(`/metrics/${id}`);
  }

  create(data) {
    return http.post("/metrics", data);
  }

  update(id, data) {
    return http.patch(`/metrics/${id}`, data);
  }

  delete(id) {
    return http.delete(`/metrics/${id}`);
  }

  //findByTitle(title) {
  //  return http.get(`/tutorials?title=${title}`);
  //}
}

export default new MetricsDataService();
