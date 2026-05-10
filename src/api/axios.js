import axios from "axios";

export default axios.create({
  baseURL: "https://project-training-production-5d59.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});
