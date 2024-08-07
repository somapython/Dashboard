import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const dashboardData = [
  { label: 'Total Orders', value: 75, color: '#3f51b5', icon: '📦' },
  { label: 'Total Delivered', value: 70, color: '#4caf50', icon: '🚚' },
  { label: 'Total Cancelled', value: 5, color: '#f44336', icon: '❌' },
  { label: 'Total Revenue', value: '$12k', color: '#ff9800', icon: '💰' }
];

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: '#1E1E2F', padding: 2, borderRadius: 2, color: 'white', marginBottom: 4 }}>
      <Typography variant="h6" gutterBottom>Dashboard</Typography>
      <Grid container spacing={2}>
        {dashboardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper sx={{ backgroundColor: item.color, padding: 2, borderRadius: 2, color: 'white' }}>
              <Typography variant="h4">{item.icon}</Typography>
              <Typography variant="h6">{item.label}</Typography> 
              <Typography variant="h4">{item.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
