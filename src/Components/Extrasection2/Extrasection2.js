import React from 'react';
import { Carousel } from 'react-bootstrap';

const Extrasection2 = () => {
    return (
        <div className='container my-5 rounded'>
           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 img-fluid"
      src="https://wallpaperaccess.com/full/377802.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-white'>AUDI</h3>
      <p>Find your AUDI car here</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 img-fluid"
      src="https://www.motortrend.com/uploads/sites/5/2021/04/2022-BMW-M3-Competition-AWD-12.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='text-white'>BMW</h3>
      <p>Find your BMW car here</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Porsche_911_elektrisch_elektro_3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='text-white'>PORSCHE</h3>
      <p>Find your PORSCHE car here</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </div>
    );
};

export default Extrasection2;