import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchItem from './SearchItem';

const Navber = () => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // setTheme('dark');
            setTheme('light');
        }
        else {
            // setTheme('light');
            setTheme('dark');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    const menuItems = <>
        <li><Link to='/'>Homepage</Link></li>
        <li><Link to='/allMovies'>Movies</Link></li>
        <li><Link to='/allTvShows'>Tv Show</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 dark:bg-[#2f3541] dark:text-white fixed top-0 z-30 w-full lg:px-[60px] md:px-[30px] backdrop-blur">
                <div className="navbar-start">
                    <ul className="menu menu-vertical lg:menu-horizontal text-success">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                {/* <div className="navbar-center">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">MOVIEFLIX</Link>
                </div> */}
                <div className="navbar-end">
                    <SearchItem></SearchItem>

                    <button className='btn btn-outline btn-sm dark:bg-[#3d4451] dark:text-white' onClick={handleThemeSwitch}>Mode</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;