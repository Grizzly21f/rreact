import React from 'react';

import styles from './todo.module.css';

const Todo = ({todo}) => {
    const {id,userId,title} = todo;

    return (
        <div className={styles.todoWrapper}>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}.</div>
        </div>
    );
};

export {
    Todo,
};