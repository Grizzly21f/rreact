import React from 'react';

const Family = ({simpson}) => {
    return (
            <div>
                <h2>{simpson.name} {simpson.surname}</h2>
                <img src={simpson.photo} alt={simpson.name}/>
                <h2>{simpson.age}</h2>
                <h2>{simpson.info}</h2>
                <hr/>
            </div>
    );
};

export default Family;