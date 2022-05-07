import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleAdduser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.name.value;
        const user = {name, email};
        // send data to server
        fetch('http://localhost:5000/user',{
            mathod: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data)
        })
    }
    return (
        <div>
            <div className='container w-50 mx-auto'>
            
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleAdduser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control  type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            
            <p>New to Genius Car? <Link to="/register" className='text-info pe-auto text-decoration-none' >Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-info pe-auto text-decoration-none' >Reset Password</button> </p>
            
            
        </div>
        </div>
    );
};

export default Login;