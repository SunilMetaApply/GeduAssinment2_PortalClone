"use client";
import React, { useState, MouseEvent } from 'react';
import { Button, Grid, Menu, MenuItem } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddNewStudentModal from '../components/AddNewStudentModal';

const DropdownButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Grid item xs={2}>
        <Button variant="outlined" onClick={handleClick}>
          <AddOutlinedIcon />
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose1}>
          <MenuItem onClick={() => {
            handleClose1();
            handleOpen();
          }}>Add New Student</MenuItem>
          <MenuItem onClick={handleClose1}>Add Application</MenuItem>
        </Menu>
      </Grid>

      <AddNewStudentModal openModal={openModal} handleClose={handleClose} />
    </>
  );
};

export default DropdownButton;
