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
export default class AddressForm extends Component {
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
      addressLine1: '',
      addressLine2: '',
      city: '',
      province: '',
      postalcode: '',
      country: '',
      error: ''
    };
  }
  confirmDialog = null

  handleAddressLine1Change = (event) => this.setState({ ...this.state, addressLine1: event.target.value });
  handleAddressLine2Change = (event) => this.setState({ ...this.state, addressLine2: event.target.value });
  handleCityChange = (event) => this.setState({ ...this.state, city: event.target.value });
  handleProvinceChange = (event) => this.setState({ ...this.state, province: event.target.value });
  handlePostalCodeChange = (event) => this.setState({ ...this.state, postalcode: event.target.value });
  handleCountryChange = (event) => this.setState({ ...this.state, country: event.target.value });

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
            <TextField floatingLabelText='Address Line 1' type='addressLine1' errorText={this.state.error} value={this.state.addressLine1} onChange={this.handleAddressLine1Change} /><br />
            <TextField floatingLabelText='Address Line 2' type='addressLine2' errorText={this.state.error} value={this.state.addressLine2} onChange={this.handleAddressLine2Change} /><br />
            <TextField floatingLabelText='City' type='city' errorText={this.state.error} value={this.state.city} onChange={this.handleCityChange} /><br />
            <TextField floatingLabelText='Province' type='province' errorText={this.state.error} value={this.state.province} onChange={this.handleProvinceChange} /><br />
            <TextField floatingLabelText='Postal Code' type='postalcode' errorText={this.state.error} value={this.state.postalcode} onChange={this.handlePostalCodeChange} /><br />
            <TextField floatingLabelText='Country' type='country' errorText={this.state.error} value={this.state.country} onChange={this.handleCountryChange} /><br />
        </div>
    );
  }
}