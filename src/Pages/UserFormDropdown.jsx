import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const UserFormDropdown = () => {
  const {updateUser,setUser,user} = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Successfully Updated Your Profile")
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photoURL =e.target.photo.value;
    // console.log(email,name,photoURL);
    const newData = {};
    if(email){
        newData.email = email;
    }
    if(name){
        newData.displayName = name;
    }
    if(photoURL){
        newData.photoURL = photoURL;
    }
    // console.log(newData);
    if (Object.keys(newData).length > 0) {
        updateUser(newData).then(() => {
            setUser(prevUser => ({
                ...prevUser,
                ...newData
            }));
            setIsOpen(false);
        }).catch((err) => {
            console.log('Update error:', err);
           
        });
    } else {
        console.log('No fields to update');
        setIsOpen(false); 
    }
    

};

  return (
    <div className="max-w-md mx-auto">
      
      <button
        onClick={toggleDropdown}
        className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-300 flex items-center justify-between"
      >
        <span>Update Your Profile ? Click Here . . .</span>
        <svg 
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    
      </button>

      
      {isOpen && (
        <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-6 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter full name"
                
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter email address"
                
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="https://example.com/photo.jpg"
              />
              
            </div>

            {/* Form Actions */}
            <div className="flex space-x-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Save Profile
              </button>
              <button
                type="button"
                onClick={toggleDropdown}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserFormDropdown;