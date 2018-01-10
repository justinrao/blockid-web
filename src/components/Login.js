import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';

const style = {
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    width: '40%',
    height: 325
  }
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
    };
  }

  handleUserIdChange = (event) => this.setState({ ...this.state, userId: event.target.value, error: '' });
  handlePasswordChange = (event) => this.setState({ ...this.state, password: event.target.value, error: '' });

  handleLogin = () => {
    if (this.state.password) {
        this.props.login(this.state)
    }
  }
  render() {
    return (
      <Card style={style.root}>
        <CardTitle title='Administrative Login' subtitle='Administrative credentials are required.'/>
        <CardText>
        <TextField ref='username' floatingLabelText='Username' fullWidth={true} value={this.state.userId} onChange={this.handleUserIdChange} /><br />
        <TextField ref='password' floatingLabelText='Password' fullWidth={true} errorText={this.state.error} value={this.state.password} type='password' onChange={this.handlePasswordChange} />
        </CardText>
        <CardActions>
            <RaisedButton label="Login" fullWidth={true} primary={true} onTouchTap={this.handleLogin} />
        </CardActions>
      </Card>
    );
  }
}