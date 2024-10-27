"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Accordion, Box, Button, FormControl, Grid, MenuItem, Select, Typography, Autocomplete, TextField, Slider, AccordionSummary, AccordionDetails, SelectChangeEvent } from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { setSearchParams } from '../../Redux/Slices/searchSlice';
import { options } from './sortOptions';
import {countryOptions, educationLevelOptions, institutionOptions, programLevelOptions, programCategoryOptions} from '../StaticProgramData'

interface Option {
    title: string;
}
const Filters: React.FC = () => {
    const dispatch = useDispatch();
    const [sort, setSort] = useState<string>('Added Recently');
    const [country, setCountry] = useState<Option | null>(null);
    const [educationLevel, setEducationLevel] = useState<Option | null>(null);
    const [institution, setInstitution] = useState<Option | null>(null);
    const [programLevel, setProgramLevel] = useState<Option | null>(null);
    const [programCategory, setProgramCategory] = useState<Option | null>(null);
    const [programDuration, setProgramDuration] = useState<number[]>([0, 20]);

    const handleClearAll = () => {
        // Reset all state variables to their initial values
        setSort('');
        setCountry(null);
        setEducationLevel(null);
        setInstitution(null);
        setProgramLevel(null);
        setProgramCategory(null);
        setProgramDuration([0, 20]);

        // Reset Redux state if necessary
        // dispatch(setSearchParams({
        //     academicRequirements: {
        //         country: null,
        //         educationLevel: null,
        //     },
        //     programDetails: {
        //         institution: null,
        //         programLevel: null,
        //         programCategory: null,
        //         programDuration: [0, 20],
        //     },
        // }));
    };

    const handleSortChange = (event: SelectChangeEvent<string>) => {
        setSort(event.target.value as string);
    };

    const handleDurationChange = (event: Event, newValue: number | number[]) => {
        setProgramDuration(newValue as number[]);
    };

    useEffect(() => {
        dispatch(setSearchParams({
            academicRequirements: { country: country?.title || null, educationLevel: educationLevel?.title || null },
            programDetails: { institution: institution?.title || null, programLevel: programLevel?.title || null, programCategory: programCategory?.title || null, programDuration },
        }));
    }, [country, educationLevel, institution, programLevel, programCategory, programDuration, dispatch]);

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
                <Grid item xs={12} sx={{ padding: '20px 0px' }}>
                    <FormControl fullWidth>
                        <Select
                            value={sort}
                            onChange={handleSortChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            size='small'
                        >
                            {options.map((options) => (
                                <MenuItem key={options.value} value={options.value} disabled={options.disabled}>
                                    {options.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Accordion sx={{ width: '100%' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                            <Typography variant="h6">Academic Requirement</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>Country of education</p>
                            <Autocomplete
                                options={countryOptions}
                                getOptionLabel={(option) => option.title}
                                value={country}
                                onChange={(event, newValue) => setCountry(newValue)}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Country of Education" variant="outlined" size="small" />
                                )}
                            />
                            <br />
                            <p>Highest Education Level</p>
                            <Autocomplete
                                options={educationLevelOptions}
                                getOptionLabel={(option) => option.title}
                                value={educationLevel}
                                onChange={(event, newValue) => setEducationLevel(newValue)}
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
                                options={institutionOptions}
                                getOptionLabel={(option) => option.title}
                                value={institution}
                                onChange={(event, newValue) => setInstitution(newValue)}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Institutions" variant="outlined" size="small" />
                                )}
                            />
                            <br />
                            <p>Program Level</p>
                            <Autocomplete
                                options={programLevelOptions}
                                getOptionLabel={(option) => option.title}
                                value={programLevel}
                                onChange={(event, newValue) => setProgramLevel(newValue)}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Program Level" variant="outlined" size="small" />
                                )}
                            />
                            <br />
                            <p>Program Categories</p>
                            <Autocomplete
                                options={programCategoryOptions}
                                getOptionLabel={(option) => option.title}
                                value={programCategory}
                                onChange={(event, newValue) => setProgramCategory(newValue)}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Program Categories" variant="outlined" size="small" />
                                )}
                            />
                            <br />
                            <Box sx={{ width: '100%', padding:'0px .5em' }}>
                                <p>Program Duration</p>
                                <br /><br />
                                <Slider
                                    getAriaLabel={() => 'Program Duration'}
                                    value={programDuration}
                                    onChange={handleDurationChange}
                                    valueLabelDisplay="on"
                                    min={0}
                                    max={60}
                                />
                                <Typography variant="body2" align="center">
                                    {`${programDuration[0]} - ${programDuration[1]} Month${programDuration[1] !== 1 ? 's' : ''}`}
                                </Typography>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </>
    );
};

export default Filters;
