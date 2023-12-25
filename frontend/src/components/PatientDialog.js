import React, { useState, useContext, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import PatientsContext from '../store/PatientsContext';
import styled from 'styled-components';
import { labelStyle } from './PatientDetails';

const StyledTextField = styled(TextField)`
  & label, label.Mui-focused {
    color: white;
    margin-top: 5px
  }

  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
  & .MuiInputBase-input {
    color: lightgreen; // For input text color
  }
`;

const PatientDialog = ({ open, onClose, editingPatient }) => {
  const { addPatient, editPatient } = useContext(PatientsContext);
  const initialState= { name: '', age: '', condition: '' }
  const [patient, setPatient] = useState(initialState);

  useEffect(() => {
    if (editingPatient) {
      setPatient(editingPatient);
    }
  }, [editingPatient]);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editingPatient) {
      editPatient(editingPatient.id, patient);
    } else {
      addPatient(patient);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} PaperProps={{className:"addBox"}}>
      <DialogTitle>Add New Patient</DialogTitle>
      <DialogContent>
        <StyledTextField
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={patient.name}
          onChange={handleChange}
        />
        <StyledTextField
          margin="dense"
          name="age"
          label="Age"
          type="number"
          fullWidth
          variant="standard"
          value={patient.age}
          onChange={handleChange}
        />
        <StyledTextField
          margin="dense"
          name="condition"
          label="Condition"
          type="text"
          fullWidth
          variant="standard"
          value={patient.condition}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={labelStyle}>Cancel</Button>
        <Button onClick={handleSubmit} sx={labelStyle}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PatientDialog;
