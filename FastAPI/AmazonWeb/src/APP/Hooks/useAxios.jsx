import axios from "axios";
import toast from "react-hot-toast";
import useApp from "./useApp";

// FastAPI backend URL
const BASE_URL = "http://127.0.0.1:5000";

function useAxios() {
  const { token } = useApp();

  const request = async (requestObj = {}) => {
    const {
      method = "GET",
      url,
      data = {},
      headers = {},
    } = requestObj;

    const loadingId = toast.loading("Loading...");

    try {
      const response = await axios({
        method,
        url: `${BASE_URL}/${url.replace(/^\/+/, "")}`,
        data,
        headers: {
          ...headers,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      return {
        response,
        responseData: response.data,
        _error: false,
      };

    } catch (error) {
      const response = error.response;
      const responseData = response?.data;

      const detail = responseData?.detail;

      let message = "Something went wrong";

      if (typeof detail === "string") {
        message = detail;
      } else if (Array.isArray(detail)) {
        message = detail
          .map((item) => item.msg)
          .join(", ");
      } else if (typeof responseData?.message === "string") {
        message = responseData.message;
      } else if (error.message) {
        message = error.message;
      }

      toast.error(message);

      return {
        response,
        responseData,
        _error: true,
      };

    } finally {
      toast.dismiss(loadingId);
    }
  };

  return request;
}

export default useAxios;