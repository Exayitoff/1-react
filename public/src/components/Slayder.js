import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import maktabim from '../rasmlar/maktabim.jpg'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='bg-dark'>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={maktabim}
          alt="First slide"
          width='100%'
        />
        <Carousel.Caption>
          <h3>29-Maktab</h3>
          <p>Maktab haqida ma'lumot</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/wings-picture-id178488809?k=20&m=178488809&s=612x612&w=0&h=9lxO4SsaO6lUH0mqFqTsACWXiv8EA9WvNedJbzYX69U="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>ikkinchi rasm</h3>
          <p>bu xam</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/wings-picture-id178488809?k=20&m=178488809&s=612x612&w=0&h=9lxO4SsaO6lUH0mqFqTsACWXiv8EA9WvNedJbzYX69U="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>uchinchi rasm</h3>
          <p>
           lorem
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

