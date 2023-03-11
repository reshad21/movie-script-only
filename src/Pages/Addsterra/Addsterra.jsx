import React, { useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Addsterra = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = '//pl18715294.highrevenuegate.com/9d5e0e738c824bf79f6852d9afa590a5/invoke.js';
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <>
            <h1 className='my-4 text-2xl inline-block rounded p-2 text-slate-600 dark:text-slate-200'>Popular Offer</h1>
            <span className='text-green-500 inline-block text-2xl mt-[5px]'><FaAngleDoubleRight /></span>

            <div>
                <div id="container-9d5e0e738c824bf79f6852d9afa590a5"></div>
            </div>
        </>
    );
};

export default Addsterra;
