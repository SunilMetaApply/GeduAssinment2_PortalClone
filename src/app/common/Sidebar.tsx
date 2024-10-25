"use client";
import React, { useState } from 'react';
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
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import Link from 'next/link';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const Sidebar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [switchMenu, setSwitchMenu] = useState(false);
  const router = useRouter();

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const settingMenuItems = [
    { text: "User", icon: <AccountCircleOutlinedIcon />, href: "/settings/user" },
    { text: "Partners", icon: <AccountCircleOutlinedIcon />, href: "/settings/partners" },
    { text: "Programs", icon: <AccountCircleOutlinedIcon />, href: "/settings/programs" },
    { text: "Institution", icon: <AccountCircleOutlinedIcon />, href: "/settings/institution" },
    { text: "Workflow", icon: <AccountCircleOutlinedIcon />, href: "/settings/workflow" },
    { text: "Lists", icon: <AccountCircleOutlinedIcon />, href: "/settings/list" },
    { text: "Bank Account", icon: <AccountCircleOutlinedIcon />, href: "/settings/bank-account" },
  ];

  const menuItems = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, href: "/dashboard" },
    { text: "Programs", icon: <BallotOutlinedIcon />, href: "/programs" },
    { text: "Students", icon: <PermIdentityOutlinedIcon />, href: "/students" },
    { text: "Applications", icon: <FactCheckOutlinedIcon />, href: "/applications" },
    { text: "Payments", icon: <MonetizationOnOutlinedIcon />, href: "/payments" },
    { text: "Reports", icon: <SummarizeOutlinedIcon />, href: "/reports" },
  ];

  const changeMenus = () => {
    if (!switchMenu) {
      setSwitchMenu(true);
      router.push("/settings/user");
    } else {
      setSwitchMenu(false);
      router.push("/dashboard");
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '93vh', borderRight: '1px solid #ccc' }}>
      {switchMenu ? (
        <List sx={{ width: '80px' }}>
          {settingMenuItems.map((item, index) => (
            <ListItem 
              key={index} 
              component={Link} 
              href={item.href} 
              sx={{ display: 'block' }} 
              onClick={() => handleItemClick(index)}
            >
              <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                {React.cloneElement(item.icon, {
                  color: selectedIndex === index ? 'primary' : 'inherit',
                })}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ fontSize: '0.6rem', textAlign: 'center', color: selectedIndex === index ? 'primary' : 'inherit' }} 
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <List sx={{ width: '80px' }}>
          {menuItems.map((item, index) => (
            <ListItem 
              key={index} 
              component={Link} 
              href={item.href} 
              sx={{ display: 'block' }} 
              onClick={() => handleItemClick(index)}
            >
              <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                {React.cloneElement(item.icon, {
                  color: selectedIndex === index ? 'primary' : 'inherit',
                })}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ fontSize: '0.6rem', textAlign: 'center', color: selectedIndex === index ? 'primary' : 'inherit' }} 
              />
            </ListItem>
          ))}
        </List>
      )}
      
      <List sx={{ maxWidth: '80px', cursor: 'pointer' }}>
        <ListItem onClick={changeMenus} sx={{ display: 'block' }}>
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Settings" 
            primaryTypographyProps={{ fontSize: '0.6rem', textAlign: 'center' }} 
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
