import React from 'react';
import '../Styles/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='h-screen lg:h-[calc(100vh-100px)] grid place-content-center'>
      <div className="container">
        <div className="card">
          <h1 className="singup">Log In</h1>
          <div className="inputBox1">
            <input type="text" required="required" />
            <span className="user">Email</span>
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
          </div>


          <input type="submit" className='enter' value="Login" />

          <p className='mb-[20px]'>New to the page? <Link to="/Register"><span className='text-[#D4A373]'>
            Signup
          </span></Link></p>

        </div>
      </div>

    </div>
  );
};

export default Login;