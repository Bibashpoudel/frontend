import axios from "axios";

//stage.mengedegna.com
const API = axios.create({
  baseURL: process.env.API_ENDPOINT || "http://locahlost:5000",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'multipart/form-data',
    // 'Access-Control-Allow-Origin': '*',
    "client-auth": "94BXrb2t6mJvtJRCc2ecwajjM94BXrb2t6mJvtJRCc2ecwajjM",
  },
});

export default API;
