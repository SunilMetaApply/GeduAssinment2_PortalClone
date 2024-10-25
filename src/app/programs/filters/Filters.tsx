"use client";
import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Sort from './Sort';
import AccordionFIlter from './AccordionFIlter';

const Filters: React.FC = () => {
    const [sort, setSort] = useState<string>('Added Recently');
    const handleClearAll = () => {
        setSort('');
    };

    return (
        <>
            <Grid container sx={{ alignItems: 'center' }}>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <FilterListOutlinedIcon />
                        <span>Filter</span>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="text" onClick={handleClearAll}>Clear All</Button>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} sx={{padding:'20px 0px'}}>
                    <Sort sort={sort} setSort={setSort} />
                </Grid>
                <Grid item xs={12}>
                    <AccordionFIlter/>
                </Grid>
            </Grid>
        </>
    );
}

export default Filters;
