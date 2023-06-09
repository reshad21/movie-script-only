import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../Pages/Context/AuthProvider';
const SearchItem = () => {
    const { collections } = useContext(AuthContext);
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = async (e) => {
        e.preventDefault();
        collections(searchTerm);
        navigate("/showSearchResult");

    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(e);
        }
    };

    return (
        <div className='m-0 p-0 '>
            <form className="block w-[100%]">
                <div className="relative w-full">
                    <input
                        type="text"
                        name='name'
                        placeholder="Search..."
                        className="input text-[#e6e101] border-2 border-[#e6e201ae] w-[192px] md:w-full sm:full outline-none bg-[#13005A]"
                        autoComplete="off"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown} />

                    <FaSearch className='absolute top-4 right-2 cursor-pointer inline-block' onClick={handleSearch} />
                </div>

            </form>
        </div>
    );
};

export default SearchItem;