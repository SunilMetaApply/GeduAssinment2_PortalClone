import { Button, Container, Grid, TextField } from '@mui/material'
import React from 'react'

const Search = () => {
  return (
    <>
        <Grid xs={9}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField fullWidth id="outlined-basic" placeholder="Country" variant="outlined" size='small' />
                </Grid>
                <Grid item xs={3}>
                    <TextField fullWidth id="outlined-basic" placeholder="Student" variant="outlined" size='small' />
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth id="outlined-basic" placeholder="Enter Dicipline programe" variant="outlined" size='small' />
                </Grid>
                <Grid item xs={2}>
                    <div style={{display:'flex', gap:'.3em'}}>
                        <Button variant="contained" color="error">Search</Button>
                        <Button variant="outlined" color="secondary">Clear</Button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default Search