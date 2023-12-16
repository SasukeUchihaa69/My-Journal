import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class CreateNewJournalEntry extends Component {
date=new Date();
     
    render() {
        return (
            <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                sx={{
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'yellow'
                }}
            >
                <Paper elevation={24}
                    square={false}
                
                    sx={{
                        height: '500px',
                        width: '700px',
                        padding: '40px',
                        margin:'50px'
                        
                    }}
                >
                    <Grid
                        container
                        direction={'column'}
                        rowSpacing={2}
                        sx={{
                            height: '100%'
                        }}>
                        <Grid item
                            flexGrow={0}
                        >
                            <TextField
                            id='entryTitle'
                                size='large'
                                label='Title'
                                placeholder='Enter Title'
                                variant='outlined'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            flexGrow={0}
                        >
                            <Typography variant='h6'
                                align='left'
                            >
                            {this.date.toLocaleDateString()}
                            </Typography>
                        </Grid>
                        <Grid
                            flexGrow={1}
                            item
                        >
                            <TextField
                            id='journalEntry'
                                variant='outlined'
                                label='Entry'
                                placeholder='How was your day?'
                                multiline
                                fullWidth
                                rows={11}
                            />
                        </Grid>
                        <Grid
                        item
                        flexGrow={0}
                        >
                            <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                            size='large'
                            fullWidth
                            > Save</Button>

                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}




