import axios from "axios";

const API_URL = "http://localhost:3030/";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
