import React from 'react';
import './Extrasection1.css';

const Extrasection1 = () => {
    return (
        <div>
           <div className="container">
  <section id="content">
    <form action="">
      <h1>Login Form</h1>
      <div>
        <input type="text" placeholder="Username" required="" id="username" />
      </div>
      <div>
        <input type="password" placeholder="Password" required="" id="password" />
      </div>
      <div>
        <input type="submit" value="Log in" />
        <a href="#">Lost your password?</a>
        <a href="/register">Register</a>
      </div>
    </form>
    
  </section>
</div>
        </div>
    );
};

export default Extrasection1;