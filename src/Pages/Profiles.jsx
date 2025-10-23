import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { IoMdMail } from 'react-icons/io';
import UserFormDropdown from './UserFormDropdown';

const Profiles = () => {
    const {user} = use(AuthContext);
    // console.log(user);
    
    return (
        <div className='flex justify-evenly items-center '>
           
           <div className='my-auto border-4 border-indigo-200 border-x-indigo-500 rounded-2xl p-5 '>
            {
                user?<div className='flex flex-col justify-center items-center'>
                     <figure className='w-36'><img className='rounded-full' src={user.photoURL} alt="" /></figure><br />
                     <h1 className='text-3xl font-semibold'>{user.displayName}</h1><br />
                     <h1 className='text-3xl font-semibold flex gap-2 justify-center items-center'><IoMdMail /> {user.email}</h1>
                     

                  </div>:" "
            }
           </div>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
             <UserFormDropdown></UserFormDropdown>
            </div>
  
            
            
        </div>
    );
};

export default Profiles;