import axios from "axios";

const instance = axios.create({
  baseURL: "https://tindor-clone-backend.herokuapp.com/",
});

export default instance;
