import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <List sx={{ maxWidth: '100px', borderRight:'1px solid #ccc' }}>
      <ListItem component={Link} href="/dashboard" sx={{ display: 'block' }}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
          <HomeOutlinedIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Dashboard" 
          primaryTypographyProps={{ fontSize: '0.6rem', textAlign:'center' }} 
        />
      </ListItem>
      <ListItem component={Link} href="/programme" sx={{ display: 'block' }}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
          <BallotOutlinedIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Programme" 
          primaryTypographyProps={{ fontSize: '0.6rem', textAlign:'center' }} 
        />
      </ListItem>
      <ListItem component={Link} href="/students" sx={{ display: 'block' }}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
          <PermIdentityOutlinedIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Students" 
          primaryTypographyProps={{ fontSize: '0.6rem', textAlign:'center' }} 
        />
      </ListItem>
      <ListItem component={Link} href="/applications" sx={{ display: 'block' }}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
          <FactCheckOutlinedIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Applications" 
          primaryTypographyProps={{ fontSize: '0.6rem', textAlign:'center' }} 
        />
      </ListItem>
      <ListItem component={Link} href="/payments" sx={{ display: 'block' }}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
          <MonetizationOnOutlinedIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Payments" 
          primaryTypographyProps={{ fontSize: '0.6rem' }} 
        />
      </ListItem>
      <ListItem component={Link} href="/reports" sx={{ display: 'block' }}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
          <SummarizeOutlinedIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Reports" 
          primaryTypographyProps={{ fontSize: '0.6rem', textAlign:'center' }} 
        />
      </ListItem>
    </List>
  );
};

export default Sidebar;
