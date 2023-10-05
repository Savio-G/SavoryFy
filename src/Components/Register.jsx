import React, { useContext, useState } from 'react';
import '../Styles/Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { user, createUser } = useContext(AuthContext)

  const [error, setError] = useState("")
  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const userName = form.username.value
    const photoUrl = form.photoUrl.value
    const password = form.password.value
    if (password.length < 8) {
      setError("Please give the password 8 characters")
      return
    }
    createUser(email, password)
      .then((result) => {
        const signedUpUser = result.user
        setError("")
        form.reset()
        updateUserData(signedUpUser, userName, photoUrl)
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  // This function is for adding username and photourl while registering and this is not coming from the authprovider page. Might update it later but for now its fine
  const updateUserData = (user, userName, photoUrl) => {
    updateProfile(user, {
      displayName: userName, photoURL: photoUrl
    }).then(() => {
      console.log('sucessfully updated')
    }).catch((error) => {
      console.log(error)
    })
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
          <p className='text-red-600 text-start'>{error}</p>
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