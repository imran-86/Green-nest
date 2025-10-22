import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayouts = () => {
    return (
        <div>
           <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>

        <main className="flex-grow w-full bg-[#fafafa]">
          <Outlet></Outlet>
        </main>

        <div className="mt-auto">
          <Footer></Footer>
        </div>

        
      </div>
        </div>
    );
};

export default RootLayouts;