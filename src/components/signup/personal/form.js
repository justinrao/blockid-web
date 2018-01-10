import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ConfirmDialog from '../../utils/ConfirmDialog'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';

const ddstyles = {
  customWidth: {

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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
        <Card style={ddstyles.root}>
        <CardTitle title='bID Sign Up - Personal Account'/>
        <CardText>
          <div>
          <TextField floatingLabelText='E-mail' value={this.state.id} onChange={this.handleUserIdChange} disabled={userId && true} /><br />
          <TextField floatingLabelText='Phone Number' value={this.state.phone} onChange={this.handleUserIdChange} disabled={userId && true} /><br />
          <TextField floatingLabelText='First Name' value={this.state.first} onChange={this.handleFirstNameChange} /><br/>
          <TextField floatingLabelText='Middle Name' value={this.state.middle} onChange={this.handleMiddleNameChange} /><br/>
          <TextField floatingLabelText='Last Name' value={this.state.last} onChange={this.handleLastNameChange} /><br />
          <br />
          <TextField floatingLabelText='Password' errorText={this.state.error} value={this.state.password} type='password' onChange={this.handlePasswordChange} /><br/>
            <TextField floatingLabelText='Confirm Password' type='password' errorText={this.state.error} value={this.state.password2} onChange={this.handlePassword2Change} /><br />
          <br />
        </div>
      </CardText>
      </Card>
    );
  }
}