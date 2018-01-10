import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ConfirmDialog from '../../utils/ConfirmDialog'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { Step, Icon } from 'semantic-ui-react'

const ddstyles = {
  customWidth: {

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  }
};
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    let step = +this.props.match.params.step || 0;
    this.state = {
      id: this.props.match.params.userId,
      step,
      first: '',
      middle: '',
      last: '',
      phone: '',
      password: '',
      password2: '',
      dob: '',
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
  handleAddressLine1Change = (event) => this.setState({ ...this.state, addressLine1: event.target.value });
  handleAddressLine2Change = (event) => this.setState({ ...this.state, addressLine2: event.target.value });
  handleCityChange = (event) => this.setState({ ...this.state, city: event.target.value });
  handleProvinceChange = (event) => this.setState({ ...this.state, province: event.target.value });
  handlePostalCodeChange = (event) => this.setState({ ...this.state, postalcode: event.target.value });
  handleCountryChange = (event) => this.setState({ ...this.state, country: event.target.value });

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
    let { userId } = this.props.match.params
    let actions = []
    if (userId) {
      actions.push(
        <div key={actions.length}><RaisedButton label="Save" primary={true} onTouchTap={this.handleSave} />&nbsp;&nbsp;
        <RaisedButton label="Delete" secondary={true} onTouchTap={this.handleDelete} />
        </div>
      )
    } else {
      actions.push(<div key={actions.length}><RaisedButton label="Create" primary={true} onTouchTap={this.handleCreate} /></div>)
    }
    actions.push(<RaisedButton key={actions.length} label="Cancel" secondary={true} containerElement={<Link to="/" />} />)
    return (
      <Card >
        <CardTitle title='bID Sign Up - Personal Account' />
        <CardText>
        <Step.Group widths={5}>
            <Step active={this.state.step === 0}>
            <Icon name='user'/>
              <Step.Content>
                <Step.Title>Account</Step.Title>
                <Step.Description>Enter account details</Step.Description>
              </Step.Content>
            </Step>
            <Step active={this.state.step === 1}>
            <Icon name='marker'/>
              <Step.Content>
                <Step.Title>Address</Step.Title>
                <Step.Description>Enter your current address</Step.Description>
              </Step.Content>
            </Step>
            <Step active={this.state.step === 2}>
            <Icon name='credit card'/>
              <Step.Content>
                <Step.Title>Identification</Step.Title>
                <Step.Description>Enter government issued identification</Step.Description>
              </Step.Content>
            </Step>
            <Step active={this.state.step === 3}>
              <Icon name='file outline'/>
              <Step.Content>
                <Step.Title>Documentation</Step.Title>
                <Step.Description>Upload identification documents</Step.Description>
              </Step.Content>
            </Step>
            <Step active={this.state.step === 4}>
              <Icon name='protect'/>
              <Step.Content>
                <Step.Title>Validation</Step.Title>
                <Step.Description>Verify identify</Step.Description>
              </Step.Content>
            </Step>
        </Step.Group>
            <div style={ddstyles.root}>
              <TextField floatingLabelText='E-mail' value={this.state.id} onChange={this.handleUserIdChange} disabled={userId && true} />
              <TextField floatingLabelText='Phone Number' value={this.state.phone} onChange={this.handleUserIdChange} disabled={userId && true} />
              <TextField floatingLabelText='First Name' value={this.state.first} onChange={this.handleFirstNameChange} />
              <TextField floatingLabelText='Middle Name' value={this.state.middle} onChange={this.handleMiddleNameChange} />
              <TextField floatingLabelText='Last Name' value={this.state.last} onChange={this.handleLastNameChange} />
              <br />
              <TextField floatingLabelText='Password' errorText={this.state.error} value={this.state.password} type='password' onChange={this.handlePasswordChange} /><br />
              <TextField floatingLabelText='Confirm Password' type='password' errorText={this.state.error} value={this.state.password2} onChange={this.handlePassword2Change} /><br />
              <br />
              <TextField floatingLabelText='Date of birth' type='dob' errorText={this.state.error} value={this.state.dob} onChange={this.handleDobChange} /><br />
              <TextField floatingLabelText='Address Line 1' type='addressLine1' errorText={this.state.error} value={this.state.addressLine1} onChange={this.handleAddressLine1Change} /><br />
              <TextField floatingLabelText='Address Line 2' type='addressLine2' errorText={this.state.error} value={this.state.addressLine2} onChange={this.handleAddressLine2Change} /><br />
              <TextField floatingLabelText='City' type='city' errorText={this.state.error} value={this.state.city} onChange={this.handleCityChange} /><br />
              <TextField floatingLabelText='Province' type='province' errorText={this.state.error} value={this.state.province} onChange={this.handleProvinceChange} /><br />
              <TextField floatingLabelText='Postal Code' type='postalcode' errorText={this.state.error} value={this.state.postalcode} onChange={this.handlePostalCodeChange} /><br />
              <TextField floatingLabelText='Country' type='country' errorText={this.state.error} value={this.state.country} onChange={this.handleCountryChange} /><br />

            </div>
      </CardText>
      </Card>
        );
  }
}