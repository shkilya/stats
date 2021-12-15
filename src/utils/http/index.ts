import axios from "axios";

const httpClient = axios.create({
    baseURL: process.env.API_GATEWAY_URL || "http://localhost:8830"
});

export default httpClient
