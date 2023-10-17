import React, {useEffect, useState} from 'react';
import ComponentsUser from "../user/ComponentsUser";

const ComponentsUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/[1, 2, 3, 4, 5, 6]')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, []);

    return (
        <div>
            {
                users.map(value => (<ComponentsUser value={value} key={value.id}/>))
            }
        </div>
    );
};

export default ComponentsUsers;