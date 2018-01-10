import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ConfirmDialog from '../../utils/ConfirmDialog'

const ddstyles = {
  customWidth: {

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  }
};
export default class IdentityForm extends Component {
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
      dob: '',
      error: ''
    };
  }
  confirmDialog = null

  handleSinChange = (event) => this.setState({ ...this.state, sin: event.target.value });
  handletypeidChange = (event) => this.setState({ ...this.state, typeid: event.target.value });

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
        <div style={ddstyles.root}>
        <TextField floatingLabelText='Social Insurance Number (SIN)' value={this.state.sin} onChange={this.handleSinChange} disabled={userId && true} />
        <TextField floatingLabelText='Type of ID Document' value={this.state.idtype} onChange={this.handleidtypeChange} disabled={userId && true} />
        </div>
    );
  }
}