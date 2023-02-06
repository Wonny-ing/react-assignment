import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Homework = () => {
  return (
    <div>
      <nav>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='product'>
          <button>Product</button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Homework;
