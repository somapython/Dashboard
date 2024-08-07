import React from 'react';
import { Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Cell } from 'recharts';
import { styled } from '@mui/material/styles';

const ActivityWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#1e1e2f',
  color: '#ffffff',
  marginTop: theme.spacing(2),
}));

const data = [
  { name: '5', uv: 3000 },
  { name: '6', uv: 2000 },
  { name: '7', uv: 1000 },
  { name: '8', uv: 1000 },
  { name: '9', uv: 1000 },
  { name: '10', uv: 2000 },
  { name: '11', uv: 3000 },
  { name: '12', uv: 1000 },
  { name: '13', uv: 2000 },
  { name: '14', uv: 1000 },
  { name: '15', uv: 2000 },
  { name: '16', uv: 2000 },
  { name: '17', uv: 3000 },
  { name: '18', uv: 2000 },
  { name: '19', uv: 1000 },
  { name: '20', uv: 2000 },
  { name: '21', uv: 1000 },
  { name: '22', uv: 1000 },
  { name: '23', uv: 2000 },
];

const renderCylinderShape = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = width / 2;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height - radius} fill={fill} />
      <circle cx={x + radius} cy={y + height - radius} r={radius} fill={fill} />
      <circle cx={x + radius} cy={y} r={radius} fill={fill} />
    </g>
  );
};
const ActivityBarChart = () => {
  return (
    <ActivityWrapper>
      <Typography variant="h6" gutterBottom>
        Activity
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" shape={renderCylinderShape} />
        </BarChart>
      </ResponsiveContainer>
    </ActivityWrapper>
  );
};

export default ActivityBarChart;
