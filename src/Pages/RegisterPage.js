import React, { Component } from 'react'
// import MyAppBar from '../Components/MyAppBar'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'

export default class RegisterPage extends Component {
    render() {
        return (
           
                <Grid container alignItems={'center'} direction={'column'} sx={{
                    backgroundColor: '#ffb703'
                }}>
                    <Grid item alignItems={'center'} mt={10} mb={10}>
                        <Paper
                            elevation={24}
                            sx={{
                                height: '500px',
                                width: '700px'
                            }}>
                            <Grid container
                                direction={'column'}
                                alignContent={'center'}
                                justifyContent={'center'}
                                rowSpacing={3}
                                component={'form'}
                            >
                                <Grid
                                    item
                                    flexGrow={0}
                                >
                                    <Typography variant='h3' component={'h1'}>
                                        Welcome to My Journal!!
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    flexGrow={0}
                                >
                                    <Typography variant='h6' component={'h1'} color={'text.secondary'}>
                                        Register to create you account
                                    </Typography>
                                </Grid>
                                <Grid item
                                    flexGrow={1}>
                                    <TextField fullWidth label="Username" />
                                </Grid>
                                <Grid item
                                    flexGrow={1}>
                                    <TextField fullWidth label="Password" />
                                </Grid>
                                <Grid item
                                    flexGrow={1} >
                                    <TextField fullWidth label="Confirm Password" />
                                </Grid>
                                <Grid item flexGrow={0} justifyContent={'center'}>
                                    <Button variant='contained' type='Submit' >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>

                </Grid>
            
        )
    }
}
