import axios from 'axios';

import { BASE_URL, TIMEOUT } from './config';

const http = axios.create({
    baseURL: BASE_URL,
    // baseURL: BASE_URL,
    timeout: TIMEOUT
})

//添加拦截
http.interceptors.request.use(config => {
    return config
},error => {
    return error;
})

http.interceptors.response.use(res => {
    return res.data
},error => {
    return error;
})

export default http;
