"use client";
import { Box, Button, Grid, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import React from 'react';

const options = [
    { value: '', label: 'Sort your preferences', disabled: true },
    { value: 'Added Recently', label: 'Added Recently' },
    { value: 'Tuition Fee Low-High', label: 'Tuition Fee Low-High' },
    { value: 'Tuition Fee High-Low', label: 'Tuition Fee High-Low' },
    { value: 'Application Fee Low-High', label: 'Application Low-High' },
    { value: 'Application High-Low', label: 'Application High-Low' },
    { value: 'Minimum Deposit Low-High', label: 'Minimum Deposit Low-High' },
    { value: 'Minimum Deposit High-Low', label: 'Minimum Deposit High-Low' },
];

const Sort: React.FC<{ sort: string; setSort: (value: string) => void }> = ({ sort, setSort }) => {
    const handleChange = (event: SelectChangeEvent<string>) => {
        setSort(event.target.value as string);
        console.log(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <Select
                value={sort}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                size='small'
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default Sort;
