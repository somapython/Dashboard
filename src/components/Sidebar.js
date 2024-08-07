import React from 'react';
import {List, ListItem, ListItemIcon,Box } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Home } from '@mui/icons-material';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import IconButton from '@mui/material/IconButton';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';

const Sidebar = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <List component="nav" >
        <ListItem button>
          <ListItemIcon>
            <GridViewOutlinedIcon sx={{color:'#3f51b5'}}/>
           </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Home sx={{color:'#3f51b5'}}/>
           </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssessmentOutlinedIcon />
           </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
           </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContentPasteRoundedIcon />
           </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <AssignmentTurnedInOutlinedIcon />
           </ListItemIcon>
        </ListItem>
    </List>
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding: '16px',bottom: '0px',left: '0px' }}>
        <IconButton>
          <ForwardRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;

