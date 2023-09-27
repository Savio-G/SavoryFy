import React, { useContext, useState } from 'react';
import '../Styles/Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const Login = () => {
  const { user, existingUser, handleGoogleLogin, handleGithubLogin } = useContext(AuthContext)

  const [error, setError] = useState("")
  const handleGoogleLoginAuth = () => {
    handleGoogleLogin()
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })

  }
  const handleGithubLoginAuth = () => {
    handleGithubLogin()
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    existingUser(email, password)
      .then((result) => {
        const existingUser = result.user
        setError("")
        form.reset()
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  return (
    <div className='h-screen lg:h-[calc(100vh-100px)] grid place-content-center'>
      <div className="container">
        <form onSubmit={handleLogin} className="card">
          <h1 className="singup">Log In</h1>
          <div className="inputBox1">
            <input type="email" name='email' required="required" />
            <span className="user">Email</span>
          </div>
          <div className="inputBox">
            <input type="password" name='password' required="required" />
            <span>Password</span>
          </div>

          <p className='text-red-700'>{error}</p>
          <input type="submit" className='enter' value="Login" />

        </form>
        <div className="mt-5 grid place-items-center gap-4">
          <>
            <button onClick={handleGoogleLoginAuth} className='enter2'>Login with Google</button>
            <button onClick={handleGithubLoginAuth} className='enter2'>Login with Github</button>
          </>
          <p className='mb-[20px]'>New to the page? <Link to="/Register"><span className='text-[#D4A373]'>
            Signup
          </span></Link></p>
        </div >
      </div >

    </div >
  );
};

export default Login;