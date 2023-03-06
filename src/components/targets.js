import React from 'react';
import mutual from '../mutual.png';
import gold from '../gold.png';
import insurance from '../insurance.png';
import bonds from '../bonds.png';
import mutualRect from '../mutualRect.png';
import goldRect from '../goldRect.png';
import insuranceRect from '../insuranceRect.png';
import bondRect from '../bondRect.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Grid, Paper, Typography } from '@mui/material';
import pie from '../pie.png';



const targets = [
    { name: 'Mutual Funds', achieved: '21.6K', total: '50k', color: '#EBF0FF', img: mutual, rect: mutualRect, rectColor: '#557AFF', percentage: '22.7%' },
    { name: 'Insurance', achieved: '21.6K', total: '50k', color: '#F2F0FF', img: insurance, rect: insuranceRect, rectColor: '#8B55FF', percentage: '49.1%' },
    { name: 'Digital Gold', achieved: '21.6K', total: '50k', color: '#FFF1DC', img: gold, rect: goldRect, rectColor: '#ED9C3A', percentage: '38.2%' },
    { name: 'Bonds', achieved: '21.6K', total: '50k', color: '#E1F6FF', img: bonds, rect: bondRect, rectColor: '#55ADFF', percentage: '80.5%' },
]

const Targets = () => {
    return (
        <Paper className='targets'
            sx={{ border: '1px solid #E7EAF3' }}
        >
            <Grid container>

                <Grid container item xs={12} xl={9}>
                    <Box className='header' sx={{ borderBottom: '1px dashed #E5E6E9', width: '100%', padding: '25px 0 15px 26px' }}>
                        <Typography variant='h5' sx={{
                            fontWeight: 700
                        }}>
                            Your Targets
                        </Typography>
                    </Box>
                    <Grid container sx={{ padding: '15px 16px 24px 26px' }}>
                        {targets.map(i => (
                            <Grid item xs={12} xl={6} sx={{ padding: '8px' }}>
                                <Paper className='target-logo-wrapper'>
                                    <Grid container>
                                        <Grid className='left' xs={9} sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            padding: '12px 46px 12px 10px'
                                        }}>
                                            <Box className='logo' sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'flex-start'
                                            }}>
                                                <Box sx={{
                                                    backgroundColor: i.color,
                                                    width: '30px',
                                                    height: '30px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderRadius: '3px'
                                                }}>
                                                    <img src={i.img} /></Box>
                                                <Typography sx={{ padding: '8px' }}>{i.name}</Typography>
                                            </Box>
                                            <Box className='bar' sx={{
                                                backgroundColor: i.color,
                                                height: '8px',
                                                width: '100%',
                                                marginY: '4px',
                                                position: 'relative',
                                                borderRadius: '5px',
                                                overflow: 'hidden'
                                            }}>
                                                <Box sx={{
                                                    backgroundColor: i.rectColor,
                                                    height: '100%',
                                                    width: i.percentage
                                                }}></Box>
                                            </Box>
                                        </Grid>

                                        <Grid className='right' xs={3} sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            justifyContent: 'space-between',
                                            padding: '12px 10px 12px 0'
                                        }}>
                                            <MoreVertIcon sx={{ height: '0.5em', width: '0.5em' }} />
                                            <Box sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-end'
                                            }}>
                                                <Typography fontSize='16px' fontWeight='600' >{i.achieved}</Typography>
                                                <Typography fontSize='9px' color='#636F86'>{i.total}</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={12} xl={3} className='pie-chart' sx={{ borderLeft: '1px dashed #E5E6E9', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ padding: '23px', position: 'relative' }}>
                        <img src={pie} />
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <Typography sx={{ width: '191px', fontWeight: '700', fontSize: '24px' }}>1.00 L</Typography>
                            <Typography sx={{ width: '191px' }}>This Month</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Targets