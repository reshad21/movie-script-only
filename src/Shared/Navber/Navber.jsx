import React, { useEffect, useState } from 'react';
import { FaBahai } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Navber.css';
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


    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        (toggle === false) ? setToggle(true) : setToggle(false);
    }
    const menuItems = <>
        <li>
            <Link className='p-0 mr-3 bg-inherit' to='/'>
                <img src={Logo} alt="" className='w-[40px] h-[40px]' />
            </Link>
        </li>
        <li>
            <Link className='p-0 mr-3 bg-inherit' to='/'>
                Home
            </Link>
        </li>
        <li tabIndex={0} >
            <Link className="p-0 mr-3 justify-between bg-inherit" to='/allMovies'>
                Movies
            </Link>
        </li>
        <li>
            <Link className='p-0 m-0 bg-inherit' to='/allTvShows'>
                Tv Show
            </Link>
        </li>
    </>
    const dropdownItems = <>
        <div className="flex flex-col gap-1">
            <li>
                <Link className='p-0 bg-inherit' to='/'>
                    <button className='btn btn-outline w-full border-slate-200 font-bold text-slate-200'>Home</button>
                </Link>
            </li>
            <li tabIndex={0} >
                <Link className="p-0 justify-between bg-inherit" to='/allMovies'>
                    <button className='btn btn-outline w-full border-slate-200 font-bold text-slate-200'>Movies</button>
                </Link>
            </li>
            <li>
                <Link className='p-0 bg-inherit' to='/allTvShows'>
                    <button className='btn btn-outline w-full border-slate-200 font-bold text-slate-200'>Tv Show</button>
                </Link>
            </li>
            <li>
                <SearchItem></SearchItem>
            </li>



        </div>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 dark:bg-[#13005A] dark:text-white fixed top-0 z-30 w-full lg:px-[60px] md:px-[30px] backdrop-blur">
                <div className="navbar justify-between ">
                    <div className="w-full flex justify-between">
                        <ul className="menu menu-horizontal px-1 hidden lg:flex">
                            {menuItems}
                        </ul>

                        <Link to='/' className='logo'><img src={Logo} alt="" className='w-[64px] h-[48px]' /></Link>

                        <div className="dropdown">
                            <Link onClick={handleToggle} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </Link>
                            <ul className={toggle ? 'block absolute z-50 right-0 w-52 menu menu-compact mt-3 p-2 shadow bg-[#000000a6] rounded-box ' : 'hidden'}>
                                {dropdownItems}
                                <FaBahai className='text-[#fff] dark:text-[#949393] mt-2 text-2xl cursor-pointer inline-block' onClick={handleThemeSwitch} />
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <SearchItem></SearchItem>
                        <FaBahai className='text-[#080808] dark:text-[#949393]  ml-2 text-2xl cursor-pointer inline-block' onClick={handleThemeSwitch} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;