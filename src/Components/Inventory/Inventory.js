import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import useServices from '../Hooks/useServices';

const Inventory = () => {
    const [services, setServices] = useServices();
    return (
        
      <div className=' m-5'>
        <h2 className='text-white'>Inventory</h2>
        
        <ul>
          {
            services.map(service => <div className='container border my-5 bg-dark p-4' key={service._id}>
              <h2 className='text-white'>{service.name}</h2>
              <img className='w-50 rounded-5' src={service.image} srcSet=''/>
              <h2 className='text-white mt-4'>Price:{service.price}</h2>
              <p className='text-white'>Description: {service.shortDescription}</p>
              <h2 className='text-white'>Quantity:{service.quantity}</h2>
              <h3 className='text-white'>Sold yet?: {service.sold}</h3>
            </div>)
          }
        </ul>
      </div>
        

    ); 
};

export default Inventory;