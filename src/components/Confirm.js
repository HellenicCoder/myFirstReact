import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar"
import {List , ListItem} from "material-ui/List"
import RaisedButton from "material-ui/RaisedButton"

export class FormUserDetails extends Component {
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
    const { values :{ firstName , lastName , email , occupation , city , bio} } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <AppBar title="Confirm Forms"/>
        <List>
           <ListItem 
           primaryText="First Name"
           secondaryText={ firstName }
           />
           <ListItem 
           primaryText="Last Name"
           secondaryText={ lastName }
           />
           <ListItem 
           primaryText="E-mail"
           secondaryText={ email }
           />
           <ListItem 
           primaryText="Your occupation"
           secondaryText={ occupation }
           />
           <ListItem 
           primaryText="Your city"
           secondaryText={ city }
           />
           <ListItem 
           primaryText="Your bio"
           secondaryText={ bio }
           />
        </List>
      <br/>
      <RaisedButton 
      label="Confirm & Continue" 
      primary={true} 
      style={styles.button}
      onClick={this.continue}
      />
      <RaisedButton 
      label="Back" 
      primary={false} 
      style={styles.button}
      onClick={this.back}
      />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles = {
    button: {
        margin: 15
    }
  }
export default FormUserDetails
