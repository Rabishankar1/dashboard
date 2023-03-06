import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import chart from '../chart.png';
import pie from '../pie.png';
import 'bootstrap/dist/css/bootstrap.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useTheme } from '@mui/material/styles';



const Performance = () => {
    const theme = useTheme();

    return (
        <Paper className='performance '
            sx={{ border: '1px solid #E7EAF3' }}
        >
            <Grid container>

                <Grid container item xs={12}>
                    <Box className='header' sx={{ borderBottom: '1px dashed #E5E6E9', width: '100%', padding: '25px 0 15px 26px' }}>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}>
                            Your Performance
                        </Typography>
                    </Box>
                </Grid>
                <Grid container sx={{ padding: '15px 16px 24px 26px' }}>

                    <Grid item xs={12} xl={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={chart} /></Grid>

                    <Grid item xs={12} xl={5} sx={{ borderLeft: '1px dashed #E5E6E9', display: 'flex' }}>

                        <Box sx={{ padding: '23px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Box sx={{ height: '37px', display: 'flex', justifyContent: 'center' }}>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant='primary'>
                                        By Asset Class
                                    </Button>
                                    <Button variant="secondary">
                                        By Licenses
                                    </Button>
                                </ButtonGroup>
                            </Box>

                            <Grid container spacing={2} sx={{ paddingTop: '34px' }}>
                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Paper sx={{ width: '108px', height: '81px', backgroundColor: '#F4F7FF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography fontWeight={500} fontSize='12px'>Mutual Funds</Typography>
                                        <Typography color='#557AFF' fontWeight={700} fontSize='22px'>12.33K</Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Paper sx={{ width: '108px', height: '81px', backgroundColor: '#F4F7FF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography fontWeight={500} fontSize='12px'>Digital Gold</Typography>
                                        <Typography color='#ED9C3A' fontWeight={700} fontSize='22px'>2.33K</Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Paper sx={{ width: '108px', height: '81px', backgroundColor: '#F4F7FF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography fontWeight={500} fontSize='12px'>Insurance</Typography>
                                        <Typography color='#8B55FF' fontWeight={700} fontSize='22px'>12.33K</Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Paper sx={{ width: '108px', height: '81px', backgroundColor: '#F4F7FF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography fontWeight={500} fontSize='12px'>Bonds</Typography>
                                        <Typography color='#55ADFF' fontWeight={700} fontSize='22px'>2.33K</Typography>
                                    </Paper>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Performance