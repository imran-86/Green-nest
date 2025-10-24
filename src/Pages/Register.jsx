
import React, { use, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Await, Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";


const Register = () => {
  const navigate = useNavigate();
  const {createUser,setUser, updateUser, signInWithGoogle,setLoading} = use(AuthContext);
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleGoogleSignIn = ()=>{
      signInWithGoogle()
      .then((result)=>{
        navigate('/')
        console.log(result);
        
      })
      .catch((error)=>{
        console.log(error);
        
      })
  }
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
        "Password must contain at least one uppercase,one lowercase and 6 characters needed "
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
      
      const user = result.user;
      updateUser({displayName : name,photoURL : photo}).then(()=>{
         setUser({...user,displayName : name,photoURL : photo});
         event.target.reset();
         toast.success("Successfully SignUp")
      setLoading(false)
      setSuccess(true);
         navigate('/')
      }).catch((err)=>{
        console.log(err);
        setUser(user)
        
      })
     
     }).catch((err) => {
        console.log(err);
        setError("Error: (auth/Email already in use).");
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
          <h1 className="text-3xl font-bold mt-5">Sign up now!</h1>
        </div>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  required
                />
                <label className="block text-sm font-medium text-gray-700 mb-1">Phot Url</label>
                <input
                  name="photoUrl"
                  type="text"
                  className="input"
                  placeholder="https://example.com/photo.jpg"
                  required
                />
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="example@gmail.com"
                />
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
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
                  <label class="label mt-2">
                    <input type="checkbox" 
                    name="terms"
                    className="checkbox" />
                    Accepts Our Terms and Conditions
                  </label>
                </div>
                {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                </div> */}
                <button className="btn btn-neutral mt-4">Sign up</button>
                <button className="btn  mt-4" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Sign up with Google</button>
              </fieldset>
              {error ? <p className="text-red-800">{error}</p> : ""}
              {success && (
                <p className="text-green-950">Account Created Successfully</p>
              )}
            </form>
            <p>Already have an account? Please<Link
            className="text-blue-500 underline ml-2"
            to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
