import { Grid } from '@mui/material'
import React from 'react'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';


const Filters:React.FC = () => {
  return (
    <>
        <Grid  xs={3}>
            <FilterListOutlinedIcon/>
            <span>Filter</span>
        </Grid>
    </>
  )
}

export default Filters