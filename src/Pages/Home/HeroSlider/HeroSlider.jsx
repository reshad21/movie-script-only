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

    const { data: sliders = [], isloading } = useQuery({
        queryKey: ['sliders'],
        queryFn: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await res.json();
            return data;
        }
    })

    if (isloading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }

    return (
        <div>

            <p className='my-8'>Total length: {sliders.length}</p>

            <div>
                <Slide className="slide-container">
                    {sliders.map((slider, index) => (
                        <div className="each-slide" key={index}>
                            <div >
                                <span>{slider.title}</span>
                                <img src={slider.thumbnailUrl} alt="" />
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>





        </div>
    );
};

export default HeroSlider;