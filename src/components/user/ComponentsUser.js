import React from 'react';

const ComponentsUser = ({value}) => {
    return (
        <div>
            <h2>{value.id} {value.name}</h2>
            <img src={value.image} alt={value.name}/>
            <h2>{value.status} {value.species}</h2>
            <h2>{value.gender}</h2>
            <hr/>
        </div>
    );
};

export default ComponentsUser;