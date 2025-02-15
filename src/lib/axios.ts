import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "X-Jsio-Token": import.meta.env.VITE_X_JSIO_TOKEN,
        "Content-Type": "application/json"
    }
})