import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch } from '@mui/material';
import PatientsContext from '../store/PatientsContext';
import bellIcon from '../assets/bell.svg';
import settingsIcon from '../assets/settings.svg';
import userIcon from '../assets/Rectangle 1.png';
import searchIcon from '../assets/search.svg';
import './style.css'

const NewHeader = () => {
  const { role, toggleTab, activeTab, toggleRole } = useContext(PatientsContext);

  return (
    <AppBar position="static" className="frame">
      <Toolbar className="header" disableGutters={true}>
        {/* Logo and Title */}
        <div className="group">
          <Typography variant="h6" className="cryptodash">
            <span className="span">Crypto</span><span className="text-wrapper-4">dash</span>
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
        <div style={{left:"60vw", top:"1vh", position: "absolute"}}>
          <Switch checked={role === 'admin'} onChange={toggleRole} className="img" />
            {role === 'doctor' ? 'Doctor' : 'Admin'}
        </div>
        {/* Search Bar */}
        <div className="overlap-group">
          <span className="div-2">
            <img className="img" src={searchIcon} alt="Search" />
            <div className="text-wrapper-3">Search..</div>
          </span>
        </div>

        {/* Action Icons */}
        <div className="div-3">
          <IconButton>
            <img className="icon" src={bellIcon} alt="Bell" />
          </IconButton>
          <IconButton>
            <img className="icon" src={settingsIcon} alt="Settings" />
          </IconButton>
          <IconButton>
            <img className="rectangle" src={userIcon} alt="User" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NewHeader;
