import React from 'react';

import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../HomePage/HomePage";

import {Todos} from "../Todos/Todos";
import {Albums} from "../Albums/Albums";
import {Comments} from "../Comments/Comments";
import {AppRoutes, AppRoutesLink} from "../../constants/appRoutes/AppRoutes";
import {Post} from "../Post/Post";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        children: [
            {
                path: AppRoutes.TODOS,
                element: <Todos/>
            },
            {
                path: AppRoutes.ALBUMS,
                element: <Albums/>
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments/>,
                children: [
                    {
                        path: AppRoutes.POSTS,
                        element: <Post/>
                    }
                ]
            }
        ]
    },
]);

export {MainRouter}