import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SpaceXLaunches() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {

        axios.get('https://api.spacexdata.com/v3/launches/')
            .then((response) => {

                const filteredLaunches = response.data.filter(launch => !launch.launch_date_local.includes('2020'));
                setLaunches(filteredLaunches);
            })
            .catch((error) => {
                console.error('Помилка при отриманні даних з API SpaceX', error);
            });
    }, []);

    return (
        <div>
            <ul>
                {launches.map((launch, index) => (
                    <li key={index}>
                        <p>Місія: {launch.mission_name}</p>
                        <p>Дата запуску: {launch.launch_date_local}</p>
                        <p>Ракета: {launch.rocket.rocket_name}</p>
                        <p>Сайт запуску: {launch.launch_site.site_name_long}</p>
                        {launch.links.mission_patch_small && (
                            <img
                                src={launch.links.mission_patch_small}
                                alt={`Патч місії ${launch.mission_name}`}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SpaceXLaunches;
