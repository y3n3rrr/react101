import React from 'react';
import { useAuth } from '../../hooks/AuthContext';

const MainDashboard = () => {
  const auth = useAuth();

  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
          </div>
        </div>
      </div>
    </>

  );
}

export default MainDashboard;