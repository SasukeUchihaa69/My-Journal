import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'
import LockIcon from '@mui/icons-material/Lock';
// import logo from '../Images/logo.png'
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }
     handleUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handlePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    validateLogin = (event) => {
        event.preventDefault();
        console.log(this.state.username,this.state.password);
    }
    render() {
        return (
            <div>
                <Grid container sx={{ height: '100vh' }}>
                    <Grid item md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                            backgroundRepeat: 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>

                    </Grid>
                    <Grid
                        item
                        md={5}
                    >
                        <Box

                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <IconButton size='large' color='inherit' sx={{
                                '& svg': {
                                    fontSize: '2.5rem', // Adjust the size as needed
                                },
                            }}>
                                <LockIcon />
                            </IconButton>
                            <Typography component={'h1'} variant='h4'>
                                Sign in
                            </Typography>
                            <Box component={'form'} sx={{ mt: 3 }} onSubmit={this.validateLogin}>
                                <TextField
                                onChange={this.handleUsername}
                                    required
                                    id='LoginUsername'
                                    margin='normal'
                                    fullWidth
                                    placeholder='Enter Username'
                                    label="Username"
                                />
                                <TextField
                                onChange={this.handlePassword}
                                    type='password'
                                    required
                                    label='Password'
                                    id='LoginPassword'
                                    placeholder='Enter Password'
                                    margin='normal'
                                    fullWidth
                                />

                                <Button
                                    type='submit'
                                    sx={{
                                        mt: 4
                                    }}
                                    size='large'
                                    fullWidth
                                    variant='contained'
                                    label='Submit'
                                >Sign in</Button>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </div>
        )
    }
}
