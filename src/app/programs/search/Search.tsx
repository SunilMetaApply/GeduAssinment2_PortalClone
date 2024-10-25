"use client"
import { Button, Grid, TextField, Autocomplete } from '@mui/material';
import React from 'react';


interface Option {
    title: string;
  }

const Search:React.FC = () => {
  const countries:Option[] = [
    { title: 'India' },
    { title: 'USA' },
    { title: 'Canada' },
    { title: 'UK' },
  ];

  const student:Option[] = [
    { title: 'Undergraduate' },
    { title: 'Postgraduate' },
    { title: 'PhD' },
  ];

  return (
    <>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Autocomplete
              multiple
              options={countries}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} placeholder="Country" variant="outlined" size="small" />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Autocomplete
              options={student}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} placeholder="Student" variant="outlined" size="small" />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth id="outlined-basic" placeholder="Enter Discipline Program" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={2}>
            <div style={{ display: 'flex', gap: '.3em' }}>
              <Button variant="contained" color="error">Search</Button>
              <Button variant="outlined" color="secondary">Clear</Button>
            </div>
          </Grid>
        </Grid>
    </>
  );
}

export default Search;
