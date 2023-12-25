import React, { createContext, useState } from 'react';

const PatientsContext = createContext({
  patients: [],
  addPatient: () => {},
  editPatient: () => {},
  role: 'doctor',
  toggleRole: () => {},
  activeTab: 'dashboard',
  toggleTab: () => {},
});

export const PatientsProvider = ({ children }) => {
  const initialPatients = [
    { id: 1, name: 'John Doe', age: 30, weight: 70, condition: 'Condition A' },
    { id: 2, name: 'Jane Smith', age: 28, weight: 65, condition: 'Condition B' },
    { id: 3, name: 'Alice Johnson', age: 35, weight: 68, condition: 'Condition C' }
  ];
  const [patients, setPatients] = useState(initialPatients);
  const [role, setRole] = useState('doctor');
  const [activeTab, setActiveTab] = useState('dashboard');

  const addPatient = (patient) => {
    setPatients([...patients, { ...patient, id: patients.length }]);
  };

  const editPatient = (id, updatedInfo) => {
    setPatients(
      patients.map((patient) =>
        patient.id === id ? { ...patient, ...updatedInfo } : patient
      )
    );
  };

  const toggleRole = () => {
    setRole(role === 'doctor' ? 'admin' : 'doctor');
  };
  const toggleTab=(tab)=>{
    setActiveTab(tab)
  }

  return (
    <PatientsContext.Provider value={{ patients, addPatient, editPatient, role, toggleRole , activeTab, toggleTab}}>
      {children}
    </PatientsContext.Provider>
  );
};

export default PatientsContext;
