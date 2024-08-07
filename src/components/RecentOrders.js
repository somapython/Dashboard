// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// const RecentOrders = () => {
//   const orders = [
//     { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
//     { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.62', status: 'Delivered' },
//     { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
//     { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
//     { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
//     { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' }
//   ];

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Customer</TableCell>
//             <TableCell>Order No.</TableCell>
//             <TableCell>Amount</TableCell>
//             <TableCell>Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {orders.map((order, index) => (
//             <TableRow key={index}>
//               <TableCell>{order.customer}</TableCell>
//               <TableCell>{order.orderNo}</TableCell>
//               <TableCell>{order.amount}</TableCell>
//               <TableCell>{order.status}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default RecentOrders;


// src/components/RecentOrders.js
import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', avatar: 'https://i.pravatar.cc/300?img=1' },
  { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.00', status: 'Delivered', avatar: 'https://i.pravatar.cc/300?img=2' },
  { customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled', avatar: 'https://i.pravatar.cc/300?img=3' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending', avatar: 'https://i.pravatar.cc/300?img=4' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', avatar: 'https://i.pravatar.cc/300?img=5' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', avatar: 'https://i.pravatar.cc/300?img=6' },
];

const statusColors = {
  Delivered: 'green',
  Cancelled: 'red',
  Pending: 'orange',
};

const RecentOrders = () => {
  return (
    <Box sx={{ backgroundColor: '#1E1E2F', padding: 2, borderRadius: 2, color: 'white' }}>
      <Typography variant="h6" gutterBottom>Recent Orders</Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: '#1E1E2F', color: 'white' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Customer</TableCell>
              <TableCell sx={{ color: 'white' }}>Order No.</TableCell>
              <TableCell sx={{ color: 'white' }}>Amount</TableCell>
              <TableCell sx={{ color: 'white' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                  <Avatar src={order.avatar} sx={{ marginRight: 2 }} />
                  {order.customer}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>{order.orderNo}</TableCell>
                <TableCell sx={{ color: 'white' }}>{order.amount}</TableCell>
                <TableCell sx={{ color: statusColors[order.status] }}>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RecentOrders;
