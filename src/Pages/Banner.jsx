import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img2 from '../assets/im6.jpg';
import img3 from '../assets/im3.jpg';



const Banner = () => {
  return (
    <div>
    <div className="carousel w-full">
<div id="slide1" className="carousel-item relative w-full">
<img src={img2} className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
<a href="#slide4" className="btn btn-circle">❮</a> 
<a href="#slide2" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
<img src={img3} className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
<a href="#slide1" className="btn btn-circle">❮</a> 
<a href="#slide3" className="btn btn-circle">❯</a>
</div>
</div> 


</div>
</div>
  );
};

export default Banner;
