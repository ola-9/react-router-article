import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate('one', { replace: false })}>
              Page One
            </button>
          </li>
          <li>
            <button onClick={() => navigate('two', { replace: false })}>
              Page Two
            </button>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
};

export default MainPage;