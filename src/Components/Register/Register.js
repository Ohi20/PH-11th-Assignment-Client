import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailblur = event => {
        setEmail(event.target.value);
    }

    const handleformsubmit = event => {
        console.log('clicked');
    }
    const handlePasswordblur = event => {
       setPassword(event.target.value);
    }
    return (
        <div>
            <div className="container my-5 pb-5">
  <section id="content">
    <form onSubmit={handleformsubmit} action="">
      <h1>Register</h1>
      
      <div>
        <input onBlur={handleEmailblur} type="email" placeholder="Email" required="" id="email" />
      </div>
      <div>
        <input onBlur={handlePasswordblur} type="password" placeholder="Password" required="" id="password" />
      </div>
      <div>
        <input type="submit" value="Register" />
        <a href="/login">Loging with Email?</a>
        <a href="/login">Login</a>
      </div>
    </form>
    
  </section>
</div>
<Footer></Footer>
        </div>
    );
};

export default Register;