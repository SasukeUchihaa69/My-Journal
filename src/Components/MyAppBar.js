import React, { Component } from 'react'
import { AppBar,Avatar,Box,Button,IconButton,Toolbar } from '@mui/material'
import MenuIcon  from '@mui/icons-material/Menu'
import logo from '../Images/logo.jpg';
import { Link } from 'react-router-dom';

export default class MyAppBar extends Component {
    constructor(){
        super();
        this.state={
            menuOpen:false,
           
        }
    }
    handleMenu=(event)=>{
        this.setState({
            menuOpen:!this.state.menuOpen
        })
    }
    render() {
        return (
            <>
                <AppBar variant='elevation' elevation={5} position='static'>
                    <Toolbar>
                        <IconButton size='large' color='inherit' flexGrow={0} onClick={this.handleMenu}>
<MenuIcon   />
</IconButton>

                       
                        <Box sx={{
                           display: 'flex',
                           flexDirection: 'row',
                           alignItems: 'center', 
                           justifyContent: 'space-evenly',
                        }}
                        flexGrow={1}>
                            <Button component={'a'} variant='h5' size='large'><Link to={'home'}>Home</Link></Button>
                            <Button component={'a'} variant='h5' size='large'><Link to={'register'}>Register</Link></Button>
                            <Button component={'a'} variant='h5' size='large'><Link to={''}>Login</Link></Button>
                        </Box>
                        <Box flexGrow={1}/>
                       <Box flexGrow={0.1}>
                        <Avatar
                        
                         src={logo}
                         alt='Avatar'>

                        </Avatar>
                       </Box>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}
