import React from 'react';

const Movie = () => {
    return (
        <div className='lg:px-24 md:px-4 px-2 py-2 mt-12 dark:bg-[#3d4451] dark:text-white'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;