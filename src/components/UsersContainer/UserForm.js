import React from 'react';
import { useForm } from "react-hook-form";
import {userService} from "../../services/userService";

const UserForm = ({setUsers}) => {
    const {reset, handleSubmit, register } = useForm();

    const save = async (user) => {
        await userService.create(user)
        setUsers(prev => {
            user.id = prev.length+1
            return [...prev, user]
        })
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')} />
            <input type="text" placeholder={'username'} {...register('username')} />
            <input type="text" placeholder={'email'} {...register('email')} />
            <button>Save</button>
        </form>
    );
};

export default UserForm;
