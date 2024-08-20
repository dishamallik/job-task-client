import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
           <div className='mt-20'><Footer></Footer></div>
        </div>
    );
};

export default Main;