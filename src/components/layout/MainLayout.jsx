import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import TopBar from './TopBar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
