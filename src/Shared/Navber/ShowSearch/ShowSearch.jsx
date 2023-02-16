import React, { useContext } from 'react';
import { AuthContext } from '../../../Pages/Context/AuthProvider';

const ShowSearch = () => {

    const { data } = useContext(AuthContext);
    console.log(data);
    return (
        <div className='lg:px-24 md:px-4 px-2 py-7 mt-12 dark:bg-[#3d4451] dark:text-white'>
            <h1>ShowSearch result:{data?.length}</h1>
        </div>
    );
};

export default ShowSearch;