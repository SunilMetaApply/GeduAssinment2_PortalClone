import React from 'react'
import Search from './search/Search'
import { Container, Grid } from '@mui/material'
import Filters from './filters/Filters'
import AllPrograms from './AllPrograms'
import programs from './programs.json'

const Programme = () => {
  return (
    <>
      <Container sx={{padding:'1.5em 0em'}} maxWidth={false}>
          <Grid container>
            <Grid item xs={9}>
              <Search/>
              <AllPrograms/>
            </Grid>
            <Grid item xs={3} sx={{ paddingLeft: '2em' }}>
              <Filters/>
            </Grid>
          </Grid>
      </Container>
    </>
  )
}

export default Programme