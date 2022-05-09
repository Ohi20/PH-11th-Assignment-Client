import React from 'react';
import Footer from '../Footer/Footer';
import './Register.css';

const Register = () => {
    return (
        <div>
            <div className="container my-5 pb-5">
  <section id="content">
    <form action="">
      <h1>Register</h1>
      <div>
        <input type="text" placeholder="Username" required="" id="username" />
      </div>
      <div>
        <input type="email" placeholder="Email" required="" id="email" />
      </div>
      <div>
        <input type="password" placeholder="Password" required="" id="password" />
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