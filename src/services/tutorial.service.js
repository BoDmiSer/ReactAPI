import http from "../http-common";

class TutorialDataService {
  getAll(params) {
    return http.get("/tutorials", { params });
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
  
  getAllPublished(params){
    return http.get("/tutorials/published", { params });
}
}

export default new TutorialDataService();