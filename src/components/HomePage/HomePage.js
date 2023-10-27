import React, {useContext} from 'react';

import {Link, Outlet} from "react-router-dom";
import {AppRoutesLink} from "../../constants/appRoutes/AppRoutes";

import styles from './homePage.module.css'

const HomePage = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                {AppRoutesLink.map((route,index) => <Link to={route.path} key={index}>{route.label}</Link>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {
    HomePage,
};