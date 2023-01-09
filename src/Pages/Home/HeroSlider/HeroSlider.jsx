import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './HeroSlider.css';


const HeroSlider = () => {
    const [sliders, setSlider] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSlider(data)
            })
    }, [])

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