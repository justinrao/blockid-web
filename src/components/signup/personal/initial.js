import React, { Component, Fragment } from 'react';
import TextField from 'material-ui/TextField';
import moment from 'moment'
const ddstyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 'auto',
    width: '40%'
  }
};

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.userId,
      first: '',
      middle: '',
      last: '',
      phone: '',
      password: '',
      password2: '',
      dob: moment(),
      error: ''
    };
  }
  confirmDialog = null

  handleUserIdChange = (event) => this.setState({ ...this.state, id: event.target.value });
  handleFirstNameChange = (event) => this.setState({ ...this.state, first: event.target.value });
  handleMiddleNameChange = (event) => this.setState({ ...this.state, middle: event.target.value });
  handlePhoneChange = (event) => this.setState({ ...this.state, phone: event.target.value });
  handleLastNameChange = (event) => this.setState({ ...this.state, last: event.target.value });
  handlePasswordChange = (event) => this.setState({ ...this.state, password: event.target.value });
  handlePassword2Change = (event) => this.setState({ ...this.state, password2: event.target.value });
  handleDobChange = (event) => this.setState({ ...this.state, dob: event.target.value });

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
    const styles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      input: {
        margin: theme.spacing.unit,
      },
    });
  }
  render() {
    return (
          <div style={ddstyles.root}>
          <TextField label='E-mail' value={this.state.id} onChange={this.handleUserIdChange} />
          <TextField label='Phone Number' value={this.state.phone} onChange={this.handlePhoneChange} />
          <TextField label='First Name' value={this.state.first} onChange={this.handleFirstNameChange} />
          <TextField label='Middle Name' value={this.state.middle} onChange={this.handleMiddleNameChange} />
          <TextField label='Last Name' value={this.state.last} onChange={this.handleLastNameChange} />
          <TextField label='Date of Birth' type="date" value={this.state.last} onChange={this.handleDobChange} InputLabelProps={{
          shrink: true,
        }}/>
          <br />
          <TextField label='Password' errorText={this.state.error} value={this.state.password} type='password' onChange={this.handlePasswordChange} />
            <TextField label='Confirm Password' type='password' errorText={this.state.error} value={this.state.password2} onChange={this.handlePassword2Change} />
        </div>
    );
  }
}