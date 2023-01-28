import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import download from '../../../assets/2.png';
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

    console.log(sliders);

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
            <div className="flex">
                <h1 className='my-8 font-bold text-2xl border-2 border-green-500 inline-block rounded p-2'>MOST TRENDING MOVIES: <span className='text-green-500'>{sliders?.length}</span></h1>
            </div>

            {/* <div className='my-2 bg-slate-500 px-4 py-4'>
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
            </div> */}


            <div className="grid gap-10 px-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 md:px-4 md:gap-5 ">
                {
                    sliders?.map((slider, index) => {
                        return (
                            <div key={index}>
                                <div className="card shadow-xl border-2 border-green-500">
                                    <div className='relative'>
                                        <figure className='rounded-t-[12px] ml-[-1px]'>
                                            <img src={imgUrl + slider?.backdrop_path} alt="Shoes" className='w-full brightness-50' />
                                        </figure>
                                        <Link to={`/movie/${slider?.id}`}>
                                            <img src={download} alt="download" className='absolute w-1/4 h-[40%] z-20 top-[40px] left-1/2 translate-x-[-50%]' />
                                        </Link>
                                    </div>

                                    <div className="card-body">
                                        <h2 className="card-title text-xl">
                                            {slider?.original_title}
                                        </h2>
                                        <p>
                                            {
                                                (slider?.overview.length > 120)
                                                    ?
                                                    <>{slider?.overview.slice(0, 120)} ...</>
                                                    :
                                                    slider?.overview
                                            }
                                        </p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">Fashion</div>
                                            <div className="badge badge-outline">Products</div>
                                        </div>
                                    </div>
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