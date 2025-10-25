import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const LoadingSpinner = () => {
    return (
        <div>
           
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-90">
            <div>
                <div className="animate-spin rounded-full h-24 w-24 border-4 border-blue-500 border-t-transparent mx-auto"></div>
                <h6 className="text-6xl font-bold text-gray-800 mt-4">Loading...</h6>
            </div>
        </div>
        {/* <Footer></Footer> */}
        </div>
    );
};

export default LoadingSpinner;