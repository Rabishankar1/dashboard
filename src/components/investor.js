import React from 'react';
import { Box, Button, Grid, InputAdornment, Paper, Select, Table, TableHead, TableRow, TextField, Typography, TableBody, withStyles, makeStyles, MenuItem } from '@mui/material';
import arrowDown from '../arrowDown.png';
import sipPie from '../sipPie.png';
import SearchIcon from '@mui/icons-material/Search';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


const rows = [
    { id: 1, logo: 'NT', name: 'Username 01', investment: '₹ 20,000.00', sip: '05', transaction: '04 Oct 2022', status: 'active' },
    { id: 2, logo: 'KG', name: 'Username 02', investment: '₹ 50,000.00', sip: '18', transaction: '29 Sep 2022', status: 'active' },
    { id: 3, logo: 'AA', name: 'Username 03', investment: '₹ 45,800.60', sip: '14', transaction: '20 Sep 2022', status: 'active' },
    { id: 1, logo: 'MK', name: 'Username 01', investment: '₹ 8,000.40', sip: '02', transaction: '18 Sep 2022', status: 'In-Active' },
];

function Investor() {
    // const classes = useStyles();
    return (
        <Paper className='invDetails' sx={{ padding: '6px', border: '1px solid #E7EAF3' }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <Typography variant='h5' sx={{ padding: '25px', fontWeight: 700 }}>Investor Details</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ mr: 1, my: 0.5 }} />
                        <TextField
                            id="input-with-sx"
                            label="Search by PAN, Email, Mobile no"
                            variant="filled"
                            sx={{
                                "& fieldset": { border: 'none' },
                            }}
                            InputLabelProps={{
                                style: {
                                    // fontSize: 12,
                                    backgroundColor: '#F4F7FF',
                                    // paddingLeft: 4,
                                    // paddingRight: 4,
                                    // color: '#383838',
                                },
                            }}
                            inputProps={{
                                style: {
                                    backgroundColor: '#F4F7FF',
                                    // fontSize: 12,
                                    height: 12,
                                    // width: 272,
                                    // padding: '0 14px',
                                    fontWeight: 'bold'
                                },
                            }}
                        />
                    </Box>
                    <Button sx={{ backgroundColor: '#F4F7FF', color: '#557AFF', margin: '10px', height: '24px', fontSize: '11px', fontWeight: 600 }}>Add</Button>
                    <Button sx={{ backgroundColor: '#F4F7FF', color: '#557AFF', margin: '10px', height: '24px', fontSize: '11px', fontWeight: 600 }}>View All</Button>
                    <Select defaultValue={'mutual'} sx={{ backgroundColor: '#F4F7FF', color: '#557AFF', margin: '10px', height: '24px', fontSize: '11px', fontWeight: 600, boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }} >
                        <MenuItem value={'mutual'}>Mutual Funds</MenuItem>
                    </Select>
                    <img src={arrowDown} style={{ marginRight: '23px' }} />
                </Box>
            </Box>

            <Paper>
                <Table sx={{
                    [`& .${tableCellClasses.root}`]: {
                        borderBottom: "none"
                    }
                }}>
                    <TableHead>
                        <TableRow sx={{ borderBottom: '1px dashed #E9E9EA' }}>
                            <TableCell sx={{ fontWeight: 700, fontSize: '14px', paddingLeft: '25px' }}>Investor's Names</TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: '14px' }} align="right">Total Investments</TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: '14px' }} align="right">Active SIPs</TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: '14px' }} align="right">Last Transactions</TableCell>
                            <TableCell sx={{ fontWeight: 700, fontSize: '14px' }} align="right">Profile Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell sx={{ color: '#636F86', fontWeight: 700, fontSize: '12px' }} component="th" scope="row">
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ padding: '5px', margin: '9px', backgroundColor: '#F1F5FF', color: '#577BFF' }}>{row.logo}</Box>
                                        {row.name}
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ color: '#636F86', fontWeight: 700, fontSize: '12px' }} align="right">{row.investment}</TableCell>
                                <TableCell sx={{ color: '#636F86', fontWeight: 700, fontSize: '12px' }} align="right">{row.sip}</TableCell>
                                <TableCell sx={{ color: '#636F86', fontWeight: 700, fontSize: '12px' }} align="right">{row.transaction}</TableCell>
                                <TableCell sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>{row.status === 'active' ? <Box sx={{ backgroundColor: '#E7F3EB', color: '#51AC70', border: ' 0.7px #51AC70 solid', borderRadius: '4px', width: '70px', height: '19px', textAlign: 'center' }}>
                                    Active
                                </Box> : <Box sx={{ backgroundColor: '#FDF5EB', color: '#ED9C3A', border: ' 0.7px #ED9C3A    solid', borderRadius: '4px', width: '70px', height: '19px', textAlign: 'center' }}>
                                    In-Active </Box>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>


            <Paper className='sips'
                sx={{ border: '1px solid #E7EAF3', marginTop: '30px' }}
            >
                <Grid container>
                    <Grid container item xs={12} xl={9}>
                        <Box className='header' sx={{ borderBottom: '1px dashed #E5E6E9', width: '100%', padding: '25px 0 15px 26px' }}>
                            <Typography variant='h5' sx={{ fontWeight: 700 }}>
                                Your SIPs
                            </Typography>
                        </Box>
                        <Grid container sx={{ padding: '15px 16px 24px 26px' }}>
                            <Grid item xs={12} lg={6} sx={{ paddingRight: '13px' }}>
                                <Paper>
                                    <Box>
                                        <Box sx={{ display: 'flex', padding: '15px' }}>
                                            <Box sx={{ backgroundColor: '#E8EEFF', color: '#557AFF', padding: '3px 8px', borderRadius: '3px' }}>Active SIPs</Box>
                                        </Box>
                                        <Box>
                                            <Grid container>
                                                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', padding: '15px', alignItems: 'center', borderRight: '0.5px dashed rgba(0, 0, 0, 0.3)' }}>
                                                    <Typography color='#636F86'>Total Amount</Typography>
                                                    <Typography variant='h4' color='#577CFF'>23.1K</Typography>
                                                </Grid>
                                                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', padding: '15px', alignItems: 'center' }}>
                                                    <Typography color='#636F86'>Total No Of SIPs</Typography>
                                                    <Typography variant='h4' color='#577CFF'>10</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box sx={{ backgroundColor: '#E8EEFF', color: '#557AFF', padding: '16px', marginTop: '13px', textAlign: 'center' }}>View All</Box>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} lg={6} sx={{ paddingLeft: '13px' }}>
                                <Paper>
                                    <Box>
                                        <Box sx={{ display: 'flex', padding: '15px' }}>
                                            <Box sx={{ backgroundColor: '#FFF1DC', color: '#ED9C3A', padding: '3px 8px', borderRadius: '3px' }}>Active SIPs</Box>
                                        </Box>
                                        <Box>
                                            <Grid container>
                                                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', padding: '15px', alignItems: 'center', borderRight: '0.5px dashed rgba(0, 0, 0, 0.3)' }}>
                                                    <Typography color='#636F86'>Total Amount</Typography>
                                                    <Typography variant='h4' color='#ED9C3A'>23.1K</Typography>
                                                </Grid>
                                                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', padding: '15px', alignItems: 'center' }}>
                                                    <Typography color='#636F86'>Total No Of SIPs</Typography>
                                                    <Typography variant='h4' color='#ED9C3A'>10</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box sx={{ backgroundColor: '#FFF1DC', color: '#ED9C3A', padding: '16px', marginTop: '13px', textAlign: 'center' }}>View All</Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} xl={3} className='pie-chart' sx={{ borderLeft: '1px dashed #E5E6E9', display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ padding: '23px', position: 'relative' }}>
                            <img src={sipPie} />
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
                                <Typography sx={{ width: '191px' }}>Total SIPs</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Paper>
    )
}

export default Investor