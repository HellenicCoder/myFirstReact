import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar"

export class Success extends Component {
    continue = e => {
        e.preventDefault()
        // backend part
        this.props.nextStep()
    }
    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <AppBar title="Success"/>
        <h1>Thank You For Your Submission</h1>
        <p>You Will get an email With further instraction</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success
