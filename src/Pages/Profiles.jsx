import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { IoMdMail } from 'react-icons/io';

const Profiles = () => {
    const {user} = use(AuthContext);
    console.log(user);
    
    return (
        <div className='flex justify-center items-center '>
           
           <div className='my-20'>
            {
                user?<div className='flex flex-col justify-center items-center'>
                     <figure className='w-full max-w-sm'><img className='rounded-full' src={user.photoURL} alt="" /></figure><br />
                     <h1 className='text-3xl font-semibold'>{user.displayName}</h1><br />
                     <h1 className='text-3xl font-semibold flex gap-2 justify-center items-center'><IoMdMail /> {user.email}</h1>
                     

                  </div>:" "
            }
           </div>
  
            
            
        </div>
    );
};

export default Profiles;