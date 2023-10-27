import React, {useEffect, useState} from 'react';
import {axiosServices} from "../../services/axiosServices";
import {Album} from "./Album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
       axiosServices.getAlbums().then(({data}) => setAlbums(data));
    },[])

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {
    Albums,
};