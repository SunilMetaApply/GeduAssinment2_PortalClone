"use client";
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Autocomplete, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface Option {
  title: string;
}

function valuetext(value: number) {
  return `${value} Month${value !== 1 ? 's' : ''}`; 
}

const AccordionFilter: React.FC = () => {
  const country: Option[] = [
    { title: 'India' },
    { title: 'USA' },
    { title: 'Canada' },
    { title: 'UK' },
  ];
  const educationLevel: Option[] = [
    { title: '1 Year post secondary certificate' },
    { title: '2 Year undergraduate diploma' },
    { title: '3 Year Bachelor degree' },
  ];
  const institutions: Option[] = [
    { title: 'University of Oxford' },
    { title: 'University of Cambridge' },
    { title: 'Imperial College London' },
  ];
  const programmelevel: Option[] = [
    { title: 'UG' },
    { title: 'PG' },
    { title: 'Doctorate' },
  ];
  const programeCategory: Option[] = [
    { title: 'Finance' },
    { title: 'Management' },
    { title: 'Media' },
    { title: 'Agriculture' },
  ];

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [value, setValue] = useState<number[]>([0, 20]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <>
      <Accordion sx={{ width: '100%' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography variant="h6">Academic Requirement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>Country of education</p>
          <Autocomplete
            options={country}
            getOptionLabel={(option) => option.title}
            onChange={(event, newValue) => setSelectedOption(newValue)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Country of Education" variant="outlined" size="small" />
            )}
          />
          <br />
          <p>Highest Education Level</p>
          <Autocomplete
            options={educationLevel}
            getOptionLabel={(option) => option.title}
            onChange={(event, newValue) => setSelectedOption(newValue)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Highest Education Level" variant="outlined" size="small" />
            )}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: '100%' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography variant="h6">Program Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>Institutions</p>
          <Autocomplete
            options={institutions}
            getOptionLabel={(option) => option.title}
            onChange={(event, newValue) => setSelectedOption(newValue)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Institutions" variant="outlined" size="small" />
            )}
          />
          <br />
          <p>Program Level</p>
          <Autocomplete
            options={programmelevel}
            getOptionLabel={(option) => option.title}
            onChange={(event, newValue) => setSelectedOption(newValue)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Program Level" variant="outlined" size="small" />
            )}
          />
          <br />
          <p>Program Categories</p>
          <Autocomplete
            options={programeCategory}
            getOptionLabel={(option) => option.title}
            onChange={(event, newValue) => setSelectedOption(newValue)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Program Categories" variant="outlined" size="small" />
            )}
          />
          <br />
          <Box sx={{ width: '100%' }}>
            <p>Program Duration</p>
            <Slider
              getAriaLabel={() => 'Program Duration'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="off"
              getAriaValueText={valuetext}
              min={0} 
              max={60} 
            />
            <Typography variant="body2" align="center">
              {/* {`${value[0]} - ${value[1]} Month${value[1] !== 1 ? 's' : ''}`} */}
              {`${value[0]} - ${value[1]} Month${value[1] !== 1 ? 's' : ''}`}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionFilter;
