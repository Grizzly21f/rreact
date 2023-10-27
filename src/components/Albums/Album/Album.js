import React from 'react';

import styles from './album.module.css'
const Album = ({album}) => {
    const {id,userId,title} = album;
    return (
        <div className={styles.albumWrapper}>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export {
    Album,
};