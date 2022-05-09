import React from 'react';
import useServices from '../Hooks/useServices';

const Services = () => {
    const [services, setServices] = useServices();
    
    const handleInventoryDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
          const url = `http://localhost:5000/service/${id}`;
          fetch(url, {
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data=>{
            if(data.deletedCount > 0){
              const remaining = services.filter(service => service._id !== id);
              setServices(remaining);
            }
          })
        } 
    }
       
      
      return (
          
        <div className=' m-5'>
          <h2 className='text-white'>Available Inventory</h2>
          <h2 className='text-white'>Quantity: {services.length} </h2>
          <div className='my-3'>
        <input type="text" placeholder="restock the items" required="" id="username" />
        <input className='bg-info text-white' type="submit" value="Restock" />
      </div>
          <ul>
            {
              services.map(service => <div className='container border my-5 bg-dark p-4' key={service._id}>
                <h2 className='text-white'>{service.name}</h2>
                <img className='w-50 rounded-5' src={service.image} srcSet=''/>
                <h2 className='text-white mt-4'>Price:{service.price}</h2>
                <p className='text-white'>Description: {service.shortDescription}</p>
                <h2 className='text-white'>Quantity:{service.quantity}</h2>
                <h3 className='text-white'>Sold yet?: {service.sold}</h3>
                <button onClick={()=> handleInventoryDelete(services._id)} className='btn-info text-white my-3'>Delivered</button>
              </div>)
            }
          </ul>
        </div>
        )
    }


    
    


export default Services;