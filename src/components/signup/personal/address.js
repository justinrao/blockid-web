import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {grey700} from 'material-ui/colors';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button'
import styles from '../../styles'

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
  handleProvinceChange = (event) => this.setState({ ...this.state, province: event.target.value });
  handlePostalCodeChange = (event) => this.setState({ ...this.state, postalcode: event.target.value });
  handleCountryChange = (event) => this.setState({ ...this.state, country: event.target.value });

  render() {
    return (
      <div>
        <div >
            <TextField fullWidth={true} label='Address Line 1' type='addressLine1' helperText={this.state.error} value={this.state.addressLine1} onChange={this.handleAddressLine1Change} />
            <TextField fullWidth={true} label='Address Line 2' type='addressLine2' value={this.state.addressLine2} onChange={this.handleAddressLine2Change} />
            <TextField fullWidth={true} label='City' type='city' helperText={this.state.error} value={this.state.city} onChange={this.handleCityChange} />
            <FormControl>
          <InputLabel htmlFor="province-input">Province</InputLabel>            
            <Select input={<Input name="province" id="province-input" />} value={this.state.province} onChange={this.handleProvinceChange} autoWidth={false}>
              {this.props.store.provinces.map((g) => {
                return <MenuItem value={g.id}>{g.label}</MenuItem>
              })
              }
        </Select>
        </FormControl>
            
            <TextField fullWidth={true} label='Postal Code' type='postalcode' helperText={this.state.error} value={this.state.postalcode} onChange={this.handlePostalCodeChange} />
            <TextField fullWidth={true} label='Country' type='country' errorText={this.state.error} value={this.state.country} onChange={this.handleCountryChange} disabled={true} />
        </div>
        <div style={styles.actions}>
        <Button style={styles.action} color="primary" raised>Next</Button>

      </div>        
      </div>        
    );
  }
}