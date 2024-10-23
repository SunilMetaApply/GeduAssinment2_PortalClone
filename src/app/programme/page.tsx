import React from 'react'
import Search from './Search'
import { Container, Grid } from '@mui/material'
import Filters from './Filters'

const Programme = () => {
  return (
    <>
      <Container sx={{padding:'1.5em 0em'}} maxWidth={false}>
          <Grid container>
            <Search/>
            <Filters/>
          </Grid>
      </Container>
    </>
  )
}

export default Programme