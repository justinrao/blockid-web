import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import View from './AddView';
import {Link} from 'react-router-dom';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import ConfirmDialog from '../utils/ConfirmDialog'

const ddstyles = {
  customWidth: {

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};
export default class UpdateUser extends Component {
  constructor(props) {
    super(props);
    let user = {}, group = 'Select Group';
    if (!!this.props.match.params.userId) {
      user = this.props.store.users.filter((u) => u.Id === this.props.match.params.userId).pop() || {}
      group = user.Authority ? user.Authority.Id : ''
    }
    const {FirstName, LastName} = user
    this.state = {
      id: this.props.match.params.userId,
      first: FirstName,
      last: LastName,
      group,
      password: '',
      password2: '',
      error: ''
    };
  }
  confirmDialog = null

  handleUserIdChange = (event) => this.setState({ ...this.state, id: event.target.value });
  handleFirstNameChange = (event) => this.setState({ ...this.state, first: event.target.value });
  handleLastNameChange = (event) => this.setState({ ...this.state, last: event.target.value });
  handleGroupChange = (event, index, value) => this.setState({ ...this.state, group: value });
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
  handleSave = () => {  
    if (!this.state.password || this.state.password === this.state.password2) {
      this.setState({ ...this.state, error: '' })
      this.props.store.updateUser(this.state)
    } else {
      this.setState({ ...this.state, error: 'Passwords do not match.' })
    }
  }
  handleDelete = (id) => {
    // confirm the deletion of the user using a dialog    
    this.confirmDialog.open()
  }
  confirmDelete = () => {
    this.props.store.deleteUser(this.props.match.params.userId)
  }
  render() {
    let {userId} = this.props.match.params
    let actions = []
    if (userId) {
      actions.push(
        <div key={actions.length}><Button raised label="Save" color="primary" onTouchTap={this.handleSave} />&nbsp;&nbsp;
        <Button raised label="Delete" secondary={true} onTouchTap={this.handleDelete} />
        </div>
      )
    } else {
      actions.push(<div key={actions.length}><Button raised label="Create" color="primary" onTouchTap={this.handleCreate} /></div>)
    }
    actions.push(<Button raised key={actions.length} label="Cancel" color="secondary" containerElement={<Link to="/" />} />)
    return (
      <div>
        <ConfirmDialog ref={(r) => this.confirmDialog = r}
          title='Delete User'
          message={`Are you sure you want to delete the user ${userId}?`}
          confirmText='Delete'
          onConfirm={this.confirmDelete}
          />
        <View title={userId ? 'Edit User' : 'Add User'} actions={actions}>
          <TextField floatingLabelText='Username' value={this.state.id} onChange={this.handleUserIdChange} disabled={userId && true} /><br />
          <TextField floatingLabelText='First Name' value={this.state.first} onChange={this.handleFirstNameChange} />&nbsp;&nbsp;
            <TextField floatingLabelText='Last Name' value={this.state.last} onChange={this.handleLastNameChange} /><br />
          <br />
          <TextField floatingLabelText='Password' errorText={this.state.error} value={this.state.password} type='password' onChange={this.handlePasswordChange} />&nbsp;&nbsp;
            <TextField floatingLabelText='Repeat' type='password' errorText={this.state.error} value={this.state.password2} onChange={this.handlePassword2Change} /><br />
          <br />
          <div style={ddstyles.root}>
            <Select floatingLabelText="Group" value={this.state.group} style={ddstyles.customWidth} onChange={this.handleGroupChange} autoWidth={false}>
              {this.props.store.groups.map((g) => {
                return <MenuItem key={g.Id} value={g.Id} label={g.Name} primaryText={g.Name} />
              })
              }
            </Select></div>
        </View>
      </div>
    );
  }
}