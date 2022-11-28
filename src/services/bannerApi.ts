import http from "./httpRequest";

const bannerApi = {
  async getListBanner() {
    const url = `/api/banner`;
    return http.get(url);
  },
  async createBanner(data: any) {
    const url = `bannerApi`;
    return http.post(url, data);
  },
  async deleteBanner(id: string) {
    const url = `/api/banner/${id}`;
    return http.delete(url);
  },
};

export default bannerApi;
