import axios from "axios";
const baseURL = "https://www.omdbapi.com/?apiKey=372b4ea0";

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: baseURL + url,
    data,
    headers,
  });
