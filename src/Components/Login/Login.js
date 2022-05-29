import React from 'react';
import Footer from '../Footer/Footer';
import './Login.css';

const Login = () => {
    const handleAdduser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.name.value;
        const user = {name, email};
        // send data to server
        fetch('https://vast-wildwood-08816.herokuapp.com/user',{
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
            <div className="container my-5 pb-5">
  <section id="content">
    <form  action="">
      <h1>Login Form</h1>
      <div>
        <input type="text" placeholder="Username" required="" id="username" />
      </div>
      <div>
        <input type="password" placeholder="Password" required="" id="password" />
      </div>
      <div>
        <input type="submit" value="Log in" />
        <a href="/login">Loging with Email?</a>
        <a href="/register">Register</a>
        <a href="/register">Google sign in</a>
        <a href="/register">Github sign in</a>
        <a href="/register">Facebook sign in</a>
      </div>
    </form>
    
  </section>
</div>
<Footer></Footer>
        </div>
    );
    
};



export default Login;