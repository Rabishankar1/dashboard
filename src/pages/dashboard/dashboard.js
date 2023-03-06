import { Box, Button, Collapse, Container, Grid, IconButton, InputAdornment, Paper, Select, Slide, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import slidermenu from '../../components/slidermenu';
import './dashboard.css';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import Targets from '../../components/targets';
import Performance from '../../components/performance';
import Investor from '../../components/investor';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import blueArrow from '../../blueArrow.png';
import yellowArrow from '../../yellowArrow.png';
import purpleArrow from '../../purpleArrow.png';
import primaryArrow from '../../primaryArrow.png';
import search from '../../search.png';
import bell from '../../bell.png';
import AccountPopover from '../../components/AccountPopover';

function Dashboard() {
  const containerRef = React.useRef(null);


  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  return (
    <Box className='dashboard' sx={{ position: 'relative' }}>
      <Box className='dock' ref={containerRef} sx={{ position: 'absolute', display: 'flex', minHeight: '100vh', bottom: 0, top: 0 }}>
        <Box className='dock' sx={{ height: '100%' }}>
          <Collapse orientation="horizontal" in={checked} collapsedSize={85} sx={{ height: '100%' }}>
            {slidermenu(checked)}
          </Collapse>
        </Box>

        <Paper className='sliding-button' sx={{
          width: '42px',
          height: '33px',
          backgroundColor: 'white',
          position: 'relative',
          top: '124px',
          left: '-21px',
        }}>
          <IconButton onClick={handleChange} sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
            {checked && (<Typography color={'#557AFF'}>&lt;</Typography>)}
            {!checked && (<Typography color={'#557AFF'}>&gt;</Typography>)}
          </IconButton>
        </Paper>

      </Box>

      <Box className='content' sx={checked ? { paddingLeft: '200px' } : { paddingLeft: '100px' }}>

        <Box className='dashboard-header' sx={{
          paddingX: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}>
          <Typography variant='h4' sx={{ fontWeight: 600, padding: '74px 0 24px 0' }}>Hi User!</Typography>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ backgroundColor: '#E8EEFF', width: '40px', height: '40px', marginRight: '45px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={search} height='50%' />
            </Box>
            <Box sx={{ backgroundColor: '#E8EEFF', width: '40px', height: '40px', marginRight: '45px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={bell} height='50%' />
            </Box>
            <AccountPopover />
          </Box>
        </Box>

        <Box sx={{
          borderTop: '1px dashed #E5E6E9',
          marginTop: '20px'
        }}>
          <Grid container>
            <Grid item xs={12} xl={9} sx={{
              // border: 'red solid 2px',
              padding: '29px'
            }}>
              <Stack spacing={3}>
                <Targets />
                <Performance />
                <Investor />
              </Stack>

            </Grid>
            <Grid item xs={3} sx={{
              // border: 'red solid 2px',
              padding: '25px',
              display: { xs: 'none', xl: 'block' },
            }}>
              <Stack spacing={5}>
                <Box >
                  <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ margin: '22px' }} >Manager Name</Box>
                    <Box sx={{ color: '#636F86' }}><LocalPostOfficeOutlinedIcon sx={{ margin: '22px' }} />managername17@gmail.com</Box>
                    <Box sx={{ color: '#636F86' }}> <LocalPhoneOutlinedIcon sx={{ margin: '22px' }} />+91 9876543210</Box>
                  </Paper>
                </Box>
                <Box >
                  <Stack spacing={3}>
                    <Typography variant='h5' sx={{ fontWeight: 600 }}>Market Insigts</Typography>

                    <Paper>
                      <Box sx={{ padding: '22px', display: 'flex', flexDirection: 'column', backgroundColor: '#F7F9FF' }}>
                        <Typography fontWeight={600} sx={{ marginBottom: '22px' }}>Market Data</Typography>
                        <Typography>Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.</Typography>
                        <Typography fontWeight={600} sx={{ marginTop: '22px', color: '#557AFF' }}>Read More <img src={blueArrow} /></Typography>
                      </Box>
                    </Paper>

                    <Paper>
                      <Box sx={{ padding: '22px', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFCF8' }}>
                        <Typography fontWeight={600} sx={{ marginBottom: '22px' }}>Market Data</Typography>
                        <Typography>Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.</Typography>
                        <Typography fontWeight={600} sx={{ marginTop: '22px', color: '#ED9C3A' }}>Read More <img src={yellowArrow} /></Typography>
                      </Box>
                    </Paper>


                    <Paper>
                      <Box sx={{ padding: '22px', display: 'flex', flexDirection: 'column', backgroundColor: '#F8F7FF' }}>
                        <Typography fontWeight={600} sx={{ marginBottom: '22px' }}>Market Data</Typography>
                        <Typography>Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.</Typography>
                        <Typography fontWeight={600} sx={{ marginTop: '22px', color: '#8B55FF' }}>Read More <img src={purpleArrow} /></Typography>
                      </Box>
                    </Paper>


                    <Paper>
                      <Box sx={{ padding: '22px', display: 'flex', flexDirection: 'column', backgroundColor: '#F4FCFF' }}>
                        <Typography fontWeight={600} sx={{ marginBottom: '22px' }}>Market Data</Typography>
                        <Typography>Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.</Typography>
                        <Typography fontWeight={600} sx={{ marginTop: '22px', color: '#55ADFF' }}>Read More <img src={primaryArrow} /></Typography>
                      </Box>
                    </Paper>

                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box >
  )
}

export default Dashboard