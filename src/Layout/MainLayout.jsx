import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='bg-custom-color'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;