"use client"
import { Button, Grid, TextField, Autocomplete } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { clearSearchParams, setSearchParams } from '../../Redux/Slices/searchSlice'; 

interface Option {
    title: string;
}

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const [selectedCountries, setSelectedCountries] = useState<Option[]>([]);
  const [selectedStudentType, setSelectedStudentType] = useState<string | null>(null);
  const [discipline, setDiscipline] = useState('');

  const countries: Option[] = [
    { title: 'India' },
    { title: 'USA' },
    { title: 'Canada' },
    { title: 'UK' },
  ];
  
  const student: Option[] = [
    { title: 'Undergraduate' },
    { title: 'Postgraduate' },
    { title: 'PhD' },
  ];

  const handleSearch = () => {
    dispatch(setSearchParams({
      countries: selectedCountries.map(country => country.title),
      studentType: selectedStudentType || '',
      discipline
    }));
  };

  const handleClear = () => {
    setSelectedCountries([]);
    setSelectedStudentType(null);
    setDiscipline('');
    dispatch(clearSearchParams());
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Autocomplete
            multiple
            options={countries}
            getOptionLabel={(option) => option.title}
            value={selectedCountries}
            onChange={(event, newValue) => setSelectedCountries(newValue)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Country" variant="outlined" size="small" />
            )}
          />
        </Grid>
        <Grid item xs={3}>
          <Autocomplete
            options={student}
            getOptionLabel={(option) => option.title}
            value={selectedStudentType ? { title: selectedStudentType } : null}
            onChange={(event, newValue) => setSelectedStudentType(newValue?.title || null)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Student" variant="outlined" size="small" />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            placeholder="Enter Discipline Program"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={2}>
          <div style={{ display: 'flex', gap: '.3em' }}>
            <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
            <Button variant="outlined" color="secondary" onClick={handleClear}>Clear</Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Search;
