import React, { Component } from 'react';
import {grey700} from 'material-ui/colors';
import {PersonalAccountForm} from './index'
import Card, {CardContent, CardHeader, CardActions} from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField';

const ddstyles = {
  floatStyle: {
    color: grey700
  },
  action: {
    background: '#007ac1',
    width: '100%',
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 'auto',
    width: '100%'
  }
};
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      error: ''
    };
  }
  confirmDialog = null

  handleUserIdChange = (event) => this.setState({ ...this.state, email: event.target.value });
  handlePasswordChange = (event) => this.setState({ ...this.state, password: event.target.value });
  handlePassword2Change = (event) => this.setState({ ...this.state, password2: event.target.value });

  handleSignUp = () => {
    if (this.state.password && this.state.password === this.state.password2) {
        this.setState({ ...this.state, error: '' })
        this.props.store.saveAccountForm(this.state)
    } else {
      if (this.state.password) {
        this.setState({ ...this.state, error: 'Please enter a password.' })
      } else {
        this.setState({ ...this.state, error: 'Passwords do not match.' })
      }
    }
  }
  render() {
    return (
      <Card style={ddstyles.root}>
      <CardHeader style={{textAlign: 'center', background: '#dedede'}} title='SIGN UP'/>
      <CardContent>
        <TextField label='E-mail' type="email" value={this.state.email} onChange={this.handleUserIdChange} fullWidth={true}/>
        <TextField label='Password' value={this.state.password} type='password' onChange={this.handlePasswordChange} fullWidth={true}/>
        <TextField label='Confirm Password' type='password' value={this.state.password2} onChange={this.handlePassword2Change} fullWidth={true}/>        
      </CardContent>
      <CardActions>
          <Button style={ddstyles.action} raised color="primary" onTouchTap={this.handleSignUp}>Get Started</Button>
      </CardActions>        
      </Card>
    );
  }
}