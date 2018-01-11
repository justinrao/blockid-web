import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import moment from 'moment'
import Button from 'material-ui/Button/Button';

import styles from '../../styles'

const ddstyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 'auto',

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

  handleFirstNameChange = (event) => this.setState({ ...this.state, first: event.target.value });
  handleMiddleNameChange = (event) => this.setState({ ...this.state, middle: event.target.value });
  handleLastNameChange = (event) => this.setState({ ...this.state, last: event.target.value });

  handlePhoneChange = (event) => this.setState({ ...this.state, phone: event.target.value });
  handleDobChange = (event) => this.setState({ ...this.state, dob: event.target.value });

  handleContinue = () => {
    this.setState({ ...this.state, error: '' })
    this.props.store.saveInitialForm(this.state)
  }

  render() {
    const formStyles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      input: {
        margin: theme.spacing.unit,
      },
      actions: {
        border: 'solid 1px #212121',
        display: 'flex',
        justifyContent: 'flex-end',
      }
    });
    return (
          <div>
            <div>
          <TextField fullWidth={true} label='First Name' value={this.state.first} onChange={this.handleFirstNameChange} />
          <TextField fullWidth={true} label='Middle Name' value={this.state.middle} onChange={this.handleMiddleNameChange} />
          <TextField fullWidth={true} label='Last Name' value={this.state.last} onChange={this.handleLastNameChange} />
          <TextField fullWidth={true} label='Phone Number' value={this.state.phone} onChange={this.handlePhoneChange} />
          <TextField fullWidth={true} label='Date of Birth' type="date" value={this.state.last} onChange={this.handleDobChange} InputLabelProps={{
          shrink: true,
        }}/>
        </div>
        <div style={styles.actions}>
        <Button style={styles.action} color="primary" raised>Next</Button>
        </div>
        </div>

    );
  }
}
