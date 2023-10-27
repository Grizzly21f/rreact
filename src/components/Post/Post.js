import React, {useEffect, useState} from 'react';

import {axiosServices} from "../../services/axiosServices";

import styles from './post.module.css'
import {useParams} from "react-router-dom";

const Post = () => {
    const postId = useParams();

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axiosServices.getPostsbyId(postId.id).then(({data}) => setPosts(data));
    },[postId.id])

    return (
        <div>
            {posts && <div className={styles.postWrapper}>
                <h2>Current post:</h2>
                <div>Id: {posts.id}</div>
                <div>Title: {posts.title}</div>
                <div>Body: {posts.body}</div>
            </div>}
        </div>
    );
};

export {
    Post,
};