import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import {grey700} from 'material-ui/styles/colors';

const ddstyles = {
  floatStyle: {
    color: grey700
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 'auto',
    width: '40%'
  }
};
export default class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.userId,
      password: '',
      password2: '',
      error: ''
    };
  }
  confirmDialog = null

  handleUserIdChange = (event) => this.setState({ ...this.state, id: event.target.value });
  handlePasswordChange = (event) => this.setState({ ...this.state, password: event.target.value });
  handlePassword2Change = (event) => this.setState({ ...this.state, password2: event.target.value });

  handleCreate = () => {
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
    let {userId} = this.props.match.params
    let styles = {
      fullWidth: true,
      floatingLabelStyle: ddstyles.floatStyle,
      underlineStyle: { borderColor: grey700}
    }
    return (
        <div style={ddstyles.root}>
        <TextField {...styles} floatingLabelText='E-mail' type="email" value={this.state.id} onChange={this.handleUserIdChange} disabled={userId && true} />
        <TextField {...styles} floatingLabelText='Password' errorText={this.state.error} value={this.state.password} type='password' onChange={this.handlePasswordChange} />
        <TextField {...styles} floatingLabelText='Confirm Password' type='password' errorText={this.state.error} value={this.state.password2} onChange={this.handlePassword2Change} />
        </div>
    );
  }
}