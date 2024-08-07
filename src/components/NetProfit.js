import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const NetProfit = () => {
  const netProfit = '$6759.25';
  const progressValue = 70;

  return (
    <Box sx={{ backgroundColor: '#1E1E2F', padding: 2, borderRadius: 2, color: 'white', display:'flex', marginBottom: 0,height:220 }}>
      
      <Box>
        <Typography variant="h5" gutterBottom>Net Profit</Typography>
      <Typography variant="h3" gutterBottom>{netProfit}</Typography>
      </Box>
      <Box sx={{textAlign: 'end'}}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={progressValue}
          size={80}
          thickness={5}
          sx={{ color: '#00bcd4' }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="white">
            {`${progressValue}%`}
          </Typography>
        </Box>
      </Box> 
      <Typography variant="body2" sx={{ marginTop: 1,fontSize:10}}>*The values here have been rounded off.</Typography>
      </Box>
    </Box>
  );
};

export default NetProfit;
