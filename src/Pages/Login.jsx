

import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";



const Login = () => {
  const {signInUser,signInWithGoogle } = use(AuthContext)
  // console.log(signInUser);
  // console.log(user);
  const [error,setError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();
  console.log(location);
   const handleGoogleSignIn = ()=>{
      signInWithGoogle()
      .then((result)=>{
        navigate(`${location.state?location.state:'/'}`)
        console.log(result);
        
      })
      .catch((error)=>{
        console.log(error);
        
      })
  }
  
  const emailRef = useRef();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    // console.log(email);
    
    // console.log(pass);
    signInUser(email, pass)
      .then((result) => {
        e.target.reset();
        // console.log(result.user);
        navigate(`${location.state?location.state:'/'}`)
      })
      .catch((err) => {
         err.message = "Invalid email/password";
        
        setError(err.message)
      });
  };
  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">
                <h1 className="text-3xl font-bold">Login now!</h1>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                  <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="input"
                                    placeholder="Password"
                                    required
                                  />
                                  <button
                                    onClick={handleTogglePasswordShow}
                                    className="btn btn-xs absolute top-2 right-4"
                                  >
                                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                  </button>
                                </div>
                <div>
                  <Link to="/forgot-password" className="link link-hover">Forgot password?</Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <button className="btn  mt-4" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Sign in with Google</button>
              </fieldset>
            </form>
            {error?<p className="text-red-700">{error}</p>:''}
            <p>
              New to our Website?Please
              <Link className="text-blue-500 underline ml-2" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
