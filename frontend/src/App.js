
import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import MainContext from './components/MainContext';
import { PatientsProvider } from './store/PatientsContext';
import NewHeader from './components/NewHeader';

function App() {
  return (
    <PatientsProvider>
      <CssBaseline />
      <NewHeader/>
      <MainContext />
    </PatientsProvider>
  );
}

export default App;
