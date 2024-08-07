import './App.css';
import { Container, Box, CssBaseline, Toolbar ,Grid, Paper, AppBar, Typography} from '@mui/material';
import Header from './components/Header';
import { styled } from '@mui/material/styles';
import RecentOrders from './components/RecentOrders';
import CustomerFeedback from './components/CustomerFeedback';
import Dashboard from './components/Dashboard';
import NetProfit from './components/NetProfit';
import Sidebar from './components/Sidebar';
import ActivityBarChart from './components/BarChart';
import Goals from './components/Goals';

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: '#333',
  minHeight: '100vh',
}));

function App() {
  return (
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{backgroundColor:'#1c1c1c'}}>
      <Sidebar />
      </Box>
      <Main>
        <Typography>
        <Grid item xs={12} md={10} sx={{backgroundColor:'#333'}}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper><Header /></Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper><Dashboard /></Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper><NetProfit /></Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper><ActivityBarChart /></Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper><Goals /></Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper><RecentOrders /></Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper><CustomerFeedback /></Paper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        </Typography>
      </Main>
    </Box>
  );
}

export default App;

