import http from "../http-common";

class FoodItemsDataService {
  getAll() {
    return http.get("/food-items");
  }

  get(id) {
    return http.get(`/food-items/${id}`);
  }

  create(data) {
    return http.post("/food-items", data);
  }

  update(id, data) {
    return http.patch(`/food-items/${id}`, data);
  }

  delete(id) {
    return http.delete(`/food-items/${id}`);
  }

  //findByTitle(title) {
  //  return http.get(`/tutorials?title=${title}`);
  //}
}

export default new FoodItemsDataService();
