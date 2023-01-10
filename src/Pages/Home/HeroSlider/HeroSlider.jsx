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

    const { data: sliders = [], isLoading } = useQuery({
        queryKey: ['sliders'],
        queryFn: async () => {
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=60328c60edaea9ec7115178b6e8c7a3a');
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae laborum quo aut non repellendus, sapiente facilis cupiditate quis ad, voluptates consectetur vero dolor quae ab, inventore delectus ex temporibus.</p>
                                        <button className='btn btn-outline'>Click me</button>
                                    </div>

                                </div>
                            )
                        })
                    }



                </Slide>
            </div>





        </div>
    );
};

export default HeroSlider;