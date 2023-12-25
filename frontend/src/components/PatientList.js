import React, { useContext } from 'react';
import PatientDetails from './PatientDetails';
import PatientsContext from '../store/PatientsContext';

const PatientList = ({ role }) => {
  const { patients } = useContext(PatientsContext);

  return (
    <>
      {patients.map(patient => (
        <PatientDetails key={patient.id} patient={patient} canEdit={role === 'doctor'} />
      ))}
    </>
  );
};

export default PatientList;
