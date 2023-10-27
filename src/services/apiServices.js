import axios from "axios";
import {baseURL} from "../constants/baseURL/baseURL";


const apiServices = axios.create({baseURL});

export {apiServices};