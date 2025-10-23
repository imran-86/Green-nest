
import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Await, Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";


const Register = () => {
  const navigate = useNavigate();
  const {createUser,setUser, updateUser} = use(AuthContext);
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    
    const email = event.target.email.value;
    const pass = event.target.password.value;
    const name = event.target.name.value;
    const photo =event.target.photoUrl.value
   
    // console.log(photoUrl);
    
    
    const terms = event.target.terms.checked;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/;
    if (!passwordPattern.test(pass)) {
      setError(
        "Password must contain at least one uppercase one lowercase and 6 characters needed "
      );
      return;
    }
    if(!terms){
        setError('Please accept our terms and condtions')
        return;
    }
    setError("");
    setSuccess(false);
     createUser(email,pass)
     .then((result)=>{
      toast.success("Successfully SignUp")
      setSuccess(true);
      const user = result.user;
      updateUser({displayName : name,photoURL : photo}).then(()=>{
         setUser({...user,displayName : name,photoURL : photo});
         event.target.reset();
         navigate('/')
      }).catch((err)=>{
        console.log(err);
        setUser(user)
        
      })
     
     }).catch((err) => {
        console.log(err);
        setError(err.message);
      }
    );

  }
  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="text-center">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                 <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  required
                />
                <label className="label">Phot Url</label>
                <input
                  name="photoUrl"
                  type="text"
                  className="input"
                  placeholder="Your Photo Url"
                  required
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleTogglePasswordShow}
                    className="btn btn-xs absolute top-2 right-4"
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </button>
                </div>
                <div>
                  <label class="label">
                    <input type="checkbox" 
                    name="terms"
                    className="checkbox" />
                    Accepts Our Terms and Conditions
                  </label>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {error ? <p className="text-red-800">{error}</p> : ""}
              {success && (
                <p className="text-green-950">Account Created Successfully</p>
              )}
            </form>
            <p>Already have an account?Please<Link
            className="text-blue-500 underline ml-2"
            to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
