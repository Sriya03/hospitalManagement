import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';
import PatientsContext from '../store/PatientsContext';
import userIcon from '../assets/Rectangle 1.png'

const Header = () => {
  const { role, toggleRole, activeTab, toggleTab } = useContext(PatientsContext);

  return (
    <AppBar position="static" className="frame" sx={{ padding: 0 }}>
      <Toolbar disableGutters={true} className="header">
        {/* Logo and Title */}
        <div className="group">
          <Typography variant="h6" className="cryptodash">
            <span className="span">Crypto</span>
            <span className="text-wrapper-4">dash</span>
          </Typography>
        </div>

        {/* Tabs */}
        <Typography className={`text-wrapper ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => toggleTab('dashboard')}>
          Dashboard
        </Typography>
        <Typography className={`div ${activeTab === 'payment' ? 'active' : ''}`} onClick={() => toggleTab('payment')}>
          Payment
        </Typography>

        {/* Role Switch */}
        <div className="div-3">
          <Switch checked={role === 'admin'} onChange={toggleRole} className="img" />
            {role === 'doctor' ? 'Doctor' : 'Admin'}
          
        </div>

        {/* Placeholder for Search, Settings, and User Icon */}
        <div className="overlap-group">
          {/* Your search, settings, and user icon components here */}
        </div>

        {/* Active Tab Indicator */}
        <img className="rectangle-2" alt="Rectangle" src={userIcon} />

      </Toolbar>
    </AppBar>
  );
};

export default Header;