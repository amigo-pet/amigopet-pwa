import axios from "axios";

export const oauthApi = axios.create({
  baseURL: "https://v66uffn4xb.execute-api.us-east-1.amazonaws.com",
});
