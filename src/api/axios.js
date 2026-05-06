import axios from "axios";

export default axios.create({
  baseURL: "https://project-training-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});
