import axios from "axios";

export const crossAxios = axios.create({
  baseURL: "https://hook.us1.make.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});
