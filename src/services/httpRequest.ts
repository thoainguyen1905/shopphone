import axios from "axios";
const baseURL = "https://api-auto-trucks-production.up.railway.app";

const http = axios.create({
  method: "post", // default
  baseURL,
});

http.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const token = localStorage.getItem("token");
    if (
      token &&
      token !== "undefined" &&
      token !== "null" &&
      newConfig.headers
    ) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  async (errors) => {
    const { data } = errors.response ? errors.response : { data: null };
    if (errors?.response?.status === 401) {
      const originalRequest = errors.config;
      if (data.status !== 401) {
        localStorage.removeItem("_token");
        localStorage.removeItem("_refresh_token");
        window.location.href = "/login";
        return Promise.reject(errors);
      }
      const refreshToken = localStorage.getItem("_refresh_token");
      if (!refreshToken) {
        localStorage.removeItem("_token");
        localStorage.removeItem("_refresh_token");
        window.location.href = "/login";
        return Promise.reject(errors);
      }
      try {
        const { data: dataRefresh }: any = await http.post(
          "/user/refresh_token",
          {},
          {
            headers: {
              refresh_token: `Bearer ${refreshToken}`,
            },
          }
        );
        localStorage.setItem("_token", dataRefresh.accessToken);
        localStorage.setItem("_refresh_token", dataRefresh.refreshAccessToken);
        originalRequest.headers.Authorization = `Bearer ${dataRefresh.accessToken}`;
        window.location.href = "/";
        return http(originalRequest); // eslint-disable-line
      } catch (error) {
        return Promise.reject(errors);
      }
    }
    return Promise.reject(errors); // eslint-disable-line
  }
);

export default http;
