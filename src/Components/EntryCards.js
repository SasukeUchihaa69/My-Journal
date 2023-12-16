import { Card, CardContent, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class EntryCards extends Component {
    constructor(props){
        super(props);
        this.props=props;
    }
  render() {
    return (
      <Card variant='elevation'>
        <CardContent>
            <Typography variant='h4'>
                {this.props.title}
            </Typography>
            <Typography>
                {this.props.entry}
            </Typography>
        </CardContent>


      </Card>
     
    )
  }
}
