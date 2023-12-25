// src/components/MainContent.js

import React, { useContext } from 'react';
import PatientsContext from '../store/PatientsContext';
import Dashboard from './Dashboard';
import Payment from './Payment';

const MainContext = () => {
  const { activeTab } = useContext(PatientsContext);

  return (
    <div className='main'>
      {activeTab === 'dashboard' ? <Dashboard /> : <Payment />}
    </div>
  );
};

export default MainContext;
