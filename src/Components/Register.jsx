import React from 'react';
import '../Styles/Login.css'
import { Link } from 'react-router-dom';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const userName = form.username.value
    const photoUrl = form.photoUrl.value
    const password = form.password.value
    console.log(email, userName, photoUrl, password)
  }
  return (
    <div className='h-screen lg:h-[calc(100vh-100px)] grid place-content-center'>
      <div className="container">
        <form onSubmit={handleRegister} className="card">
          <h1 className="singup">Sign Up</h1>

          <div className="inputBox">
            <input type="text" name='username' required="required" />
            <span>Username</span>
          </div>
          <div className="inputBox1">
            <input type="email" name='email' required="required" />
            <span className="user">Email</span>
          </div>


          <div className="inputBox">
            <input type="text" name='photoUrl' required="required" />
            <span>PhotoUrl</span>
          </div>

          <div className="inputBox">
            <input type="password" name='password' required="required" />
            <span>Password</span>
          </div>

          <input type="submit" className='enter' value="Sign Up" />

          <p className='mb-[20px]'>Already have an account? <Link to="/Login"><span className='text-[#D4A373]'>
            Login
          </span></Link></p>
        </form>
      </div>

    </div>
  );
};

export default Register;