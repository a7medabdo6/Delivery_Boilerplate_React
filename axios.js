import axios from "axios";

const ApiBaseUrl = axios.create({ baseURL: "http://137.184.12.206/api" });
// const baseurl_Dev = axios.create({ baseURL: 'http://localhost:5000/' });

export default ApiBaseUrl;
