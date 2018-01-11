import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ConfirmDialog from '../../utils/ConfirmDialog'
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

export default class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      province: '',
      postalcode: '',
      country: 'Canada',
      error: ''
    };
  }
  confirmDialog = null

  handleAddressLine1Change = (event) => this.setState({ ...this.state, addressLine1: event.target.value });
  handleAddressLine2Change = (event) => this.setState({ ...this.state, addressLine2: event.target.value });
  handleCityChange = (event) => this.setState({ ...this.state, city: event.target.value });
  handleProvinceChange = (event, index, value) => this.setState({ ...this.state, province: value });
  handlePostalCodeChange = (event) => this.setState({ ...this.state, postalcode: event.target.value });
  handleCountryChange = (event) => this.setState({ ...this.state, country: event.target.value });

  render() {
    let {userId} = this.props.match.params
    let actions = []
    let styles = {
      fullWidth: true,
      floatingLabelStyle: ddstyles.floatStyle,
      underlineStyle: { borderColor: grey700}
    }

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
            <TextField {...styles} floatingLabelText='Address Line 1' type='addressLine1' errorText={this.state.error} value={this.state.addressLine1} onChange={this.handleAddressLine1Change} />
            <TextField {...styles} floatingLabelText='Address Line 2' type='addressLine2' errorText={this.state.error} value={this.state.addressLine2} onChange={this.handleAddressLine2Change} />
            <TextField {...styles} floatingLabelText='City' type='city' errorText={this.state.error} value={this.state.city} onChange={this.handleCityChange} />
            <SelectField {...styles} floatingLabelText="Province" value={this.state.province} style={ddstyles.customWidth} onChange={this.handleProvinceChange} autoWidth={false}>
              {this.props.store.provinces.map((g) => {
                return <MenuItem key={g.id} value={g.id} label={g.label} primaryText={g.label} />
              })
              }
        </SelectField>
            
            <TextField {...styles} floatingLabelText='Postal Code' type='postalcode' errorText={this.state.error} value={this.state.postalcode} onChange={this.handlePostalCodeChange} />
            <TextField {...styles} floatingLabelText='Country' type='country' errorText={this.state.error} value={this.state.country} onChange={this.handleCountryChange} />
        </div>
    );
  }
}