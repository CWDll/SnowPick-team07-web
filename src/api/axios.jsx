import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-3-34-188-34.ap-northeast-2.compute.amazonaws.com:8080",
});

export default instance;
