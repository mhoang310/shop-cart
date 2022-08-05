import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

const HomeTemplate = () => {
    return (
        <div>
            <Header />

            <Outlet />

            <hr className="mt-5" />
            <Footer />
        </div>
    )
}

export default HomeTemplate;
