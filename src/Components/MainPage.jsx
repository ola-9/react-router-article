import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/one">Page One</Link>
          </li>
          <li>
            <Link to="/two">Page Two</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};


export default MainPage;