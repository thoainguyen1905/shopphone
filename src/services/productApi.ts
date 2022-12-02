import http from "./httpRequest";

const productApi = {
  async getListProduct(page: number) {
    const url = `/api/product?page_size=12&page_index=${page}`;
    return http.get(url);
  },
  async getListProductSort(data: any) {
    const { page, sort } = data;
    const url = `/api/product?page_size=12&page_index=${page}&sort=${sort}`;
    return http.get(url);
  },
  async getDetailProduct(id: string) {
    const url = `/api/product/${id}`;
    return http.get(url);
  },
};

export default productApi;
