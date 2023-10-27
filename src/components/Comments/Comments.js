import React, {useEffect, useState} from 'react';

import {axiosServices} from "../../services/axiosServices";
import {Comment} from "./Comment/Comment";
import {Outlet} from "react-router-dom";


const Comments = () => {
    const [comments,setComments] = useState([]);

    useEffect(() => {
        axiosServices.getComments().then(({data}) => setComments(data));
    },[]);

    return (
        <div>
            <div>
                <Outlet/>
            </div>
            <hr/>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {
    Comments,
};