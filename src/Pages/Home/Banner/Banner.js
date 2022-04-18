import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner1.jpg'
import banner2 from '../../../Images/banner2.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className='slider-caption'>
      <h3> <span className='span' >GET</span></h3>
      <h3>TRAINED</h3>
      <h3> <span className='span'> BE</span></h3>
      <h3>EMPOWERED</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption className='slider-caption2'>
      <h3>To Be the best</h3>
      <h3> <span className='span'> You have to Train</span></h3>
      <h3>With the best</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </div>
    );
};

export default Banner;