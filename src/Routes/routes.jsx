import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import AllMovies from '../Pages/AllMovies/AllMovies';
import AllTvShows from '../Pages/AllTvShows/AllTvShows';
import Home from '../Pages/Home/Home/Home';
import Movie from '../Pages/Movie/Movie';
import ShowSearch from '../Shared/Navber/ShowSearch/ShowSearch';
import AboutUs from '../Shared/PrivacyPolicy/AboutUs';
import PrivacyPolicy from '../Shared/PrivacyPolicy/PrivacyPolicy';

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
                path: '/showSearchResult',
                element: <ShowSearch></ShowSearch>
            },
            {
                path: '/privacypolicy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/movie/:id/:name',
                element: <Movie></Movie>
            }
        ]
    },
]);

export default router;