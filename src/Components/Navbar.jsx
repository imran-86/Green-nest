import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/LogoGreenNest.png'
import { AuthContext } from '../Context/AuthContext/AuthContext';
import userPhoto from '../assets/image.png'
const Navbar = () => {
  const {user,signOutUser} = use(AuthContext)
  // console.log(user);
  const handleSignOut = () =>{
           signOutUser()
           .then(()=>{
             
           })
          .catch(err =>{
            console.log(err);
            
          })
  }
  
  //  console.log(user.photoURL);
   
  
    return (
        <div className="navbar bg-base-100 shadow-sm px-20 sticky top-0 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/plants">Plants</NavLink></li>
      <li><NavLink to={`${user?"/profile":"/login"}`}>My Profile</NavLink></li>
      </ul>
    </div>
    <figure className='w-20  rounded-2xl'><img src={logo} alt="" />
     
    </figure>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/plants">Plants</NavLink></li>
      <li><NavLink to={`${user?"/profile":"/login"}`}>My Profile</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end ">
    {
      user?<details className="dropdown">
  <summary className=" list-none cursor-pointer">
    <figure className='mt-4 w-16 h-16'>
      <img className='rounded-full' src={`${user? user.photoURL:userPhoto}`} alt=""
        referrerPolicy='no-referrer'
      /></figure></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-36 p-1 shadow-sm">
    <li><a>{user.displayName}</a></li>
    <Link><li><a onClick={handleSignOut}>Sign Out</a></li></Link>
    
  </ul>
</details>:
      <div className='flex gap-4'>
        <Link to="/login">Sign In</Link>
         <Link to="/register">Sign Up</Link>
      </div>
    }
    
  </div>
</div>
    );
};

export default Navbar;