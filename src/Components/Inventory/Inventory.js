import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import useServices from '../Hooks/useServices';

const Inventory = () => {
    const [services, setServices] = useServices();
    return (
        <div>
{
services.map(service => <div className='container-fluid d-flex' key={service._id}>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src={service.image} />
    <Card.Body>
      <Card.Title>Name:{service.name} </Card.Title>
      </Card.Body>
    <Card.Footer>
      <button>See more..</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
)
}

        </div>

    ); 
};

export default Inventory;