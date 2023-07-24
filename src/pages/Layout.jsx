import React from 'react';
import Home from './Home';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-16'>
             <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;