import React, { Component } from 'react';
import {grey700} from 'material-ui/colors';
import {PersonalAccountForm} from './index'
import Card, {CardContent, CardHeader, CardActions} from 'material-ui/Card'
import Button from 'material-ui/Button'

const ddstyles = {
  floatStyle: {
    color: grey700
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
      id: '',
      password: '',
      password2: '',
      error: ''
    };
  }
  confirmDialog = null

  handleUserIdChange = (event) => this.setState({ ...this.state, id: event.target.value });
  handlePasswordChange = (event) => this.setState({ ...this.state, password: event.target.value });
  handlePassword2Change = (event) => this.setState({ ...this.state, password2: event.target.value });

  handleSignUp = () => {
    if (this.state.password && this.state.password === this.state.password2) {
        this.setState({ ...this.state, error: '' })
        this.props.store.addUser(this.state)
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
      <CardHeader title={'bID Sign Up'}/>
      <CardContent>
        <PersonalAccountForm {...this.props}/>
        </CardContent>
        <CardActions>
            <Button  raised label="Sign Up" fullWidth={true} color="primary" onTouchTap={this.handleLogin} />
        </CardActions>
        
      </Card>
    );
  }
}