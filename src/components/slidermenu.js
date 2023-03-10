import { Box, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import './slidermenu.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import offerings from '../offerings.png';
import transaction from '../transaction.png';
import investment from '../investment.png';


const slidermenu = (checked, windowSize) => (<Paper sx={{ minHeight: '100%', display: 'flex' }}>
    <Box sx={{ backgroundColor: '#f8fbff', width: '190px', paddingRight: '51px' }}>
        {checked && (<Typography className='header-logo' variant='h5' sx={{
            padding: '66px 80px 71px 44px',
            // fontFamily: 'SF Pro Display',
            fontWeight: 700,
            letterSpacing: '1.6px',
            fontSize: '36px',
            fontFamily: 'Source Sans Pro'
        }}
        >LOGO</Typography>)}
        {/* {!checked && (<Box sx={{ height: '150px' }}></Box>)} */}
        <Stack direction='column' sx={{ paddingLeft: '35px', paddingTop: '30px', paddingRight: '51px' }} spacing={8}>
            <Box className='menu-item'>
                <Typography sx={{
                    flex: 0.3,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#557AFF',
                    color: 'white',
                    borderRadius: '3px'
                }}>
                    <DashboardIcon />
                </Typography>
                <Typography sx={{ flex: 1, textAlign: 'left', marginLeft: '19px' }}>Dashboard</Typography>
            </Box>
            <Box className='menu-item'>
                <Typography sx={{
                    flex: 0.3,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#E8EEFF',
                    width: '23px',
                    height: '23px',
                    padding: '6px 0',
                    borderRadius: '3px'
                }}><img src={investment} alt='investment' /></Typography>
                <Typography sx={{ flex: 1, textAlign: 'left', marginLeft: '19px' }}>Investor</Typography>
            </Box>
            <Box className='menu-item'>
                <Typography sx={{
                    flex: 0.3,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#E8EEFF',
                    width: '23px',
                    height: '23px',
                    padding: '6px 0',
                    borderRadius: '3px'
                }}><img src={offerings} alt='offerings' /></Typography>
                <Typography sx={{ flex: 1, textAlign: 'left', marginLeft: '19px' }}>Offerings</Typography>
            </Box>
            <Box className='menu-item'>
                <Typography className='menu-icon'><ContentPasteIcon /></Typography>
                <Typography sx={{ flex: 1, textAlign: 'left', marginLeft: '19px' }}>Reporting</Typography>
            </Box>
            <Box className='menu-item'>
                <Typography sx={{
                    flex: 0.3,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#E8EEFF',
                    width: '23px',
                    height: '23px',
                    padding: '6px 0',
                    borderRadius: '3px'
                }}><img src={transaction} alt='transaction' /></Typography>
                <Typography sx={{ flex: 1, textAlign: 'left', marginLeft: '19px' }}>Transactions</Typography>
            </Box>
        </Stack>
    </Box>
</Paper >)



export default slidermenu