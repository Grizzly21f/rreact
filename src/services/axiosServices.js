import {apiServices} from "./apiServices";
import {links} from "../constants/baseURL/baseURL";


const axiosServices = {
    getTodos: () => apiServices.get(links.todos),
    getAlbums: () => apiServices.get(links.albums),
    getComments: () => apiServices.get(links.comments),
    getPostsbyId: (id) => apiServices.get(links.posts(id))
}

export {axiosServices};