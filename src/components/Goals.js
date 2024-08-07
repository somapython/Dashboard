import React from 'react';
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Box, Avatar} from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CloudTwoToneIcon from '@mui/icons-material/CloudTwoTone';
import ElectricMeterTwoToneIcon from '@mui/icons-material/ElectricMeterTwoTone';
import SensorWindowTwoToneIcon from '@mui/icons-material/SensorWindowTwoTone';

const GoalsWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#1e1e2f',
  color: '#ffffff',
}));

const Goals = () => {
  return (
    <GoalsWrapper sx={{ marginTop: '20px'}}>
      <List>
        <Box sx={{ marginTop: '40px'}}>
        <ListItem >
          <ListItemIcon sx={{ color:'#f72d1e'}}>
          <ElectricMeterTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Goals"  />
          <ListItemIcon sx={{ display: 'flex',justifyContent: 'flex-end'}}>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        </Box>
        <Box sx={{ marginTop: '40px'}}>
        <ListItem >
          <ListItemIcon sx={{ color:'#2100d4'}}>
            <SensorWindowTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Popular Dishes" />
          <ListItemIcon sx={{ display: 'flex',justifyContent: 'flex-end'}}>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        </Box>
        <Box sx={{ marginTop: '40px', marginBottom: '50px'}}>
        <ListItem >
          <ListItemIcon sx={{ color:'#2db6ec'}}>
            <CloudTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Menus" />
          <ListItemIcon sx={{ display: 'flex',justifyContent: 'flex-end'}}>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        </Box>
      </List>
    </GoalsWrapper>
  );
};

export default Goals;
