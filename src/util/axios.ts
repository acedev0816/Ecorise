import axios, {AxiosRequestConfig} from "axios";
import {BACKEND_API} from "../config-global";
const axiosInstance = axios.create({baseURL: BACKEND_API});
export default axiosInstance;