import React, {useEffect, useState} from 'react';
import UserForm from "./UserForm";
import Users from "./Users";
import {userService} from "../../services/userService";

const UsersContainer = () => {

    const [users, setUsers] = useState([])


    useEffect(() => {
            userService.getAll().then(({data})=> setUsers(data))
    }, []);
    console.log(users)
    return (
        <div>
        <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UsersContainer;