import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './HeroSlider.css';


const HeroSlider = () => {
    // const [sliders, setSlider] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setSlider(data)
    //         })
    // }, [])


    const API_KEY = '60328c60edaea9ec7115178b6e8c7a3a';


    const { data: sliders = [], isLoading } = useQuery({
        queryKey: ['sliders'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
            const data = await res.json();
            return data.results;
        }
    })

    if (isLoading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }


    const imgUrl = 'https://image.tmdb.org/t/p/w500';



    return (
        <div>

            <p className='my-8'>Total length: {sliders?.length}</p>

            <div className='my-2 bg-slate-500 px-4 py-4'>
                <Slide className="slide-container flex gap-4">
                    {
                        sliders?.map((slider, index) => {
                            return (
                                <div key={index}>
                                    <div className='bg-white px-12 w-[400px]'>
                                        <div className="w-full">
                                            <img src={slider?.poster_path} alt="" className='w-full object-cover' />
                                        </div>
                                        <h2 className='font-bold py-2'>{slider?.original_title}</h2>
                                        <p>{slider?.overview}</p>
                                        <button className='btn btn-outline'>Click me</button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </Slide>
            </div>


            <div className="grid gap-10 lg:grid-cols-5 justify-center items-center">
                {
                    sliders?.map((slider, index) => {
                        return (
                            <div key={index}>
                                <div className='bg-white p-2 border-2 border-black'>
                                    <div className="w-full">
                                        <img src={imgUrl + slider?.backdrop_path} alt="" className='w-full object-cover' />
                                    </div>
                                    <h2 className='font-bold py-2'>{slider?.original_title}</h2>
                                    <p>{slider?.overview}</p>
                                    <button className='btn btn-outline'>Click me</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>





        </div>
    );
};

export default HeroSlider;