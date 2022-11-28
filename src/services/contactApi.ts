import http from "./httpRequest";

const contactApi = {
  async createContact(data: any) {
    const url = `/api/contacter`;
    return http.post(url, data);
  },
  async getListContact() {
    const url = `/api/contacter?page_size=10&page_index=1`;
    return http.get(url);
  },
  async getDetailContact(id: string) {
    const url = `/api/contacter/${id}`;
    return http.get(url);
  },
};

export default contactApi;
