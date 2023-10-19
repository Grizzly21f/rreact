import React from 'react';

function LaunchList({ launches }) {
    return (
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
    );
}

export default LaunchList;