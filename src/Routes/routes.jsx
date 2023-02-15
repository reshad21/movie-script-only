import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import AllMovies from '../Pages/AllMovies/AllMovies';
import AllTvShows from '../Pages/AllTvShows/AllTvShows';
import Home from '../Pages/Home/Home/Home';
import Movie from '../Pages/Movie/Movie';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allMovies',
                element: <AllMovies></AllMovies>
            },
            {
                path: '/allTvShows',
                element: <AllTvShows></AllTvShows>
            },
            {
                path: '/movie/:id',
                element: <Movie></Movie>
            }
        ]
    },
]);

export default router;