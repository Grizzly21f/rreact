import axios from "axios";

import baseURL from '../const/baseURL'

const axiosService = axios.create({baseURL})

export {
    axiosService
}