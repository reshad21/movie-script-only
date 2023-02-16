import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const SearchItem = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        console.log(name);
        setInputValue(name);
        console.log("updatted value is:", inputValue);
    }

    const { data: searchValue = [], isLoading } = useQuery({
        queryKey: ['searchValue', inputValue],
        queryFn: async () => {
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`);
            const data = await res.json();
            return data.results;
        }
    })

    // console.log(inputValue);
    console.log(searchValue);

    if (isLoading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }



    return (
        <div>
            <form className="" onSubmit={handleSubmit}>

                {/* <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search..." className="input bg-inherit border border-slate-400" /> */}

                <input type="text" name='name' placeholder="Search..." className="input bg-inherit border border-slate-400" />

                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </form>
        </div>
    );
};

export default SearchItem;