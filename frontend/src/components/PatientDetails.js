import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions, Collapse, Box } from '@mui/material';
import PatientDialog from './PatientDialog';
export const labelStyle = {
  color: 'white', // White text for labels
  marginBottom: '8px', // Space below labels
};
const PatientDetails = ({ patient, canEdit }) => {
  const [expanded, setExpanded] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cardStyle = {
    backgroundColor: '#1A1A1D', // Dark background
    color: 'white', // White text
    borderRadius: '10px', // Rounded corners
    margin: '20px',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)', // Shadow effect
    width: '60vw'
  };

 

  const infoStyle = {
    color: 'rgb(24 224 32)', // Green text for info
    marginBottom: '8px', // Space below info
    paddingLeft: '10px'
  };

  return (
    <Card variant="outlined"  sx={cardStyle}>
      <CardContent onClick={handleExpandClick}>
        <Box className="cardrow">
          <Typography sx={labelStyle}>Patient</Typography>
          <Typography>{patient.id}</Typography>
        </Box>
        <Box className="cardrow">
          <Typography sx={labelStyle}>Name <span style={infoStyle}>{patient.name}</span></Typography>
          <Typography sx={labelStyle}>Phone number <span style={infoStyle}>{patient.name}</span></Typography>
        </Box>
        <Box className="cardrow">
          <Typography sx={labelStyle}>Age <span style={infoStyle}>{patient.age}</span></Typography>
          <Typography sx={labelStyle}>Weight <span style={infoStyle}>{patient.weight}</span></Typography>
          <Typography sx={labelStyle}>BP <span style={infoStyle}>{patient.weight}</span></Typography>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Box className="cardrow">
          <Typography sx={labelStyle}>Medication <span style={infoStyle}>{patient.name}</span></Typography>
          <Typography sx={labelStyle}>Previous Dates <span style={infoStyle}>{patient.name}</span></Typography>
        </Box>
        </CardContent>
        {canEdit && (
          <CardActions>
            <Button size="small" onClick={handleDialogOpen} sx={labelStyle}>Edit</Button>
          </CardActions>
        )}
      </Collapse>
      <PatientDialog open={dialogOpen} onClose={handleDialogClose} editingPatient={patient} />
    </Card>
  );
};

export default PatientDetails;