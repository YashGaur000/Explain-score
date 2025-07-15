import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}