import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayouts = () => {
    return (
        <div>
           <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>

        <main className="flex-grow w-full ">
          <Outlet></Outlet>
        </main>

        <div className="mt-auto">
          <Footer></Footer>
        </div>
          <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
      </div>
        </div>
    );
};

export default RootLayouts;