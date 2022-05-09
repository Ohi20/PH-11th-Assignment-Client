import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useServices from '../Hooks/useServices';

const Services = () => {
    const [services, setServices] = useServices();
    
    return (
       
        <div className='col-12'>
            
            {
                services.map(service => <div className='container-fluid col-12' key={service._id}>
                    
                    <div className='col-12'>
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service.image} />
  <Card.Body>
    <Card.Title><h5 className='text-info'>{service.name}</h5></Card.Title>
    <Card.Text>
    <p className='text-info'>Sold yet?{service.sold}</p>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><p className='text-info'>Price:${service.price}</p></ListGroupItem>
    <ListGroupItem><p className='text-info'>Quantity:{service.quantity}</p></ListGroupItem>
    </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
                    </div>
                    
                    
                    
                    </div>
           
        )
    }


    </div>
    );
};

export default Services;