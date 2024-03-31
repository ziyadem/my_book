import axios from "axios";
import { enqueueSnackbar } from "notistack";

//? Base Axios instance
const $axios = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
});

//? REQUEST interceptor
$axios.interceptors.request.use(
  // eslint-disable-next-line
  async (request: any) => {
    request.headers = {
      ...request.headers,
      authorization: "Bearer " + localStorage.getItem("ac"),
    };
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//? RESPONSE interceptor
$axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 401) {
      if (localStorage.getItem("re")) {
        try {
          const refreshRes = await $axios.post("/auth/refresh", {
            refreshToken: localStorage.getItem("re"),
          });

          localStorage.setItem("ac", refreshRes.data.accessToken);

          $axios.defaults.headers.common.authorization =
            refreshRes.data.accessToken;

          if (error.config.headers) {
            error.config.headers.authorization = refreshRes.data.accessToken;
          }
          return await $axios(error.config);
        } catch (err) {
          localStorage.removeItem("ac");
          localStorage.removeItem("re");
          localStorage.removeItem("status_name");
          window.location.replace("/login");
        }
      } else {
        localStorage.removeItem("ac");
        localStorage.removeItem("re");
        localStorage.removeItem("status_name");
        window.location.replace("/login");
      }
    } else {
      if (Array.isArray(error?.response?.data?.message)) {
        error?.response?.data?.message?.map((e: string) =>
          enqueueSnackbar(e, {
            variant: "error",
            autoHideDuration: 1000,
          })
        );
      } else {
        enqueueSnackbar(error?.response?.data?.message, {
          variant: "error",
          autoHideDuration: 1000,
        });
      }
    }
    return Promise.reject(error);
  }
);

export default $axios;
