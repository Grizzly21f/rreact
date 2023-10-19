import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LaunchList from "../Launch/LaunchList";


function SpaceXLaunches() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.spacexdata.com/v3/launches/')
            .then((response) => {
                const filteredLaunches = response.data.filter(
                    (launch) => !launch.launch_date_local.includes('2020')
                );
                setLaunches(filteredLaunches);
            })
    }, []);

    return (
        <div>
            <h1>Запуски SpaceX (окрім 2020 року)</h1>
            <LaunchList launches={launches} />
        </div>
    );
}

export default SpaceXLaunches;
