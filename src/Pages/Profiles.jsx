import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { IoMdMail } from 'react-icons/io';
import UserFormDropdown from './UserFormDropdown';


const Profiles = () => {
    const {user} = use(AuthContext);
    return (
        <div className=' flex flex-col md:flex-row md:justify-evenly items-center '>
           
           <div className='shadow-md my-auto border md:border-4 border-indigo-200 border-x-indigo-500 rounded-2xl p-2 md:p-5 '>
            {
                user?<div className='flex flex-col justify-center items-center'>
                     <figure className='w-24 md:w-36'><img className='rounded-full' src={user.photoURL} alt="" /></figure><br />
                     <h1 className='text-xl md:text-3xl font-semibold'>{user.displayName}</h1><br />
                     <h1 className='flex-wrap text-xl md:text-3xl font-semibold flex flex-col md:flex-row gap-2 justify-center items-center'><IoMdMail /> {user.email}</h1>
                     

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