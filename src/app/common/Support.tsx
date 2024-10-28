"use client";
import React, { useState, MouseEvent } from 'react';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Button, Grid, Menu, MenuItem } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SupportModal from '../components/SupportModal';
import WhatsAppButton from '../components/WhattsupFunctionality';

const Support: React.FC = () => {
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
      <WhatsAppButton phoneNumber={917428697331} message="Hello! I need assistance." />
      {/* <SupportModal openModal={openModal} handleClose={handleClose} /> */}
    </>
  );
};

export default Support;
