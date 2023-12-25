import React, { useContext ,useState} from 'react';
import PatientsContext from '../store/PatientsContext';
import PatientList from './PatientList';
import { Button } from '@mui/material';
import PatientDialog from './PatientDialog';
const Dashboard = () => {
  const { role } = useContext(PatientsContext);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className='dashboard'>
      <Button variant="contained" onClick={handleDialogOpen} style={{backgroundColor:'#181920', left:'40vw'}}>Add Patient</Button>
      <PatientDialog open={dialogOpen} onClose={handleDialogClose} />
      <PatientList role={role} />
    </div>
  );
};

export default Dashboard;
