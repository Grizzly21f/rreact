import React from 'react';

import styles from './comment.module.css'
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    const navigation = useNavigate();

    const {id,email,name,body} = comment;
    return (
        <div className={styles.commentWrapper} onClick={() => {
            navigation(`/comments/post/${id}`);
        }}>
            <div>Id: {id}</div>
            <div>Name: {name}.</div>
            <div>Email: {email}.</div>
            <div>Body: {body}.</div>
        </div>
    );
};

export {
    Comment,
};