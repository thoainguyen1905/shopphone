import httpRequest from "./httpRequest";

const newsApi = {
  async getListNews(page: any) {
    const url = `/api/news?page_size=3&page_index=${page}`;
    return httpRequest.get(url);
  },
  async getDetailNews(id: string) {
    const url = `/api/news/${id}`;
    return httpRequest.get(url);
  },
  async createNews(data: any) {
    const url = `/api/news`;
    return httpRequest.post(url, data);
  },
};

export default newsApi;
