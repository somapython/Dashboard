import React from 'react';
import { Box, Typography, Avatar, Paper, Grid, Rating } from '@mui/material';

const feedbacks = [
  {
    name: 'Jenny Wilson',
    avatar: 'https://i.pravatar.cc/300?img=7',
    rating: 5,
    comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.',
  },
  {
    name: 'Dianne Russell',
    avatar: 'https://i.pravatar.cc/300?img=8',
    rating: 4,
    comment: 'We enjoyed the Eggs Benedict served. Perfect service.',
  },
  {
    name: 'Devon Lane',
    avatar: 'https://i.pravatar.cc/300?img=9',
    rating: 3,
    comment: 'Normally wings are wings, but theirs are lean meaty and tender.',
  },
];

const CustomerFeedback = () => {
  return (
    <Box sx={{ backgroundColor: '#1E1E2F', padding: 2, borderRadius: 2, color: 'white' }}>
      <Typography variant="h6" gutterBottom>Customer's Feedback</Typography>
      {feedbacks.map((feedback, index) => (
        <Paper key={index} sx={{ backgroundColor: '#1E1E2F', color: 'white', padding: 2, marginBottom: 2, border: '1px solid #383854' }}>
          <Grid container spacing={2}>
            <Grid item>
              <Avatar src={feedback.avatar} />
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1">{feedback.name}</Typography>
              <Rating value={feedback.rating} readOnly />
              <Typography variant="body2" sx={{ marginTop: 1 }}>{feedback.comment}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default CustomerFeedback;


