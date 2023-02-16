import React from 'react';

const SearchItem = () => {




    return (
        <div className='m-0 p-0'>
            <form className="block w-[100%]">
                <div className="relative w-full">
                    <input type="text" name='name' placeholder="Search..." className="input bg-inherit border border-slate-400 w-[192px] md:w-full sm:full" />

                    <button className="btn btn-ghost btn-circle absolute top-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>

            </form>
        </div>
    );
};

export default SearchItem;