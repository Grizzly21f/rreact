import React from 'react';
import { useForm } from "react-hook-form";
import {postService} from "../../services/postService";

const PostForm = ({setPosts}) => {
    const {reset, handleSubmit, register } = useForm();

    const save = async (post) => {
        await postService.create(post)
        setPosts(prev => {
            post.id = prev.length+1
            return [...prev, post]
        })
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'id'} {...register('id')} />
            <input type="text" placeholder={'title'} {...register('title')} />
            <input type="text" placeholder={'body'} {...register('body')} />
            <button>Save</button>
        </form>
    );
};

export default PostForm;
