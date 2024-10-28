import { Box, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import DropdownButton from './DropDown';
import BreadCrumb from './BreadCrumb';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <Container className='header' sx={{padding:'5px 0px', borderBottom:'1px solid #ccc'}} maxWidth={false}>
      <Grid container>
        <Grid item xs={5}>
          <Box style={{display:'flex', alignItems:'center', gap:'1em'}}> 
              <Image src="https://portal-dev.eduapply.io/malogocomplete.svg" width={20} height={20} alt="logo" />
              <BreadCrumb/>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={2}>
              <DropdownButton/>
            </Grid>
            <Grid item xs={5}>
              <TextField fullWidth placeholder="Search" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={5}>
              <Grid container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems:'center', gap:'1em' }}>
                <Grid item style={{width:'40px', height:'40px', lineHeight:'40px', textAlign:'center', borderRadius:'50%', backgroundColor:'#ccc'}}>
                  <span>AK</span>
                </Grid>
                <Grid item>
                  <span>Aazam Khan</span> <br />
                  <span>Role: A</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
