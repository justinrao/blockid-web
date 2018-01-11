import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {grey700} from 'material-ui/colors';
import moment from 'moment'

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

export default class IdentityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idtype: '',
      idNumber: '',
      idExpiry: moment(),
      error: ''
    };
  }
  confirmDialog = null

  handleSinChange = (event) => this.setState({ ...this.state, sin: event.target.value });
  handleIdNumberChange = (event) => this.setState({ ...this.state, idNumber: event.target.value });
  handleIdTypeChange = (event) => this.setState({ ...this.state, idtype: event.target.value });
  handleIdExpiryChange = (value) => this.setState({ ...this.state, idExpiry: value });
  
  render() {
    return (
        <div style={ddstyles.root}>
        <TextField label='Social Insurance Number (SIN)' value={this.state.sin} onChange={this.handleSinChange} />
        <Select label="Select Type of ID" value={this.state.idtype} style={ddstyles.customWidth} onChange={this.handleIdTypeChange} autoWidth={false}>
              {this.props.store.idtypes.map((g) => {
                return <MenuItem key={g.id} value={g.id} label={g.label} primaryText={g.label} />
              })
              }
        </Select>
        <TextField label='ID Number' type="phone" value={this.state.idNumber} onChange={this.handleIdNumberChange} />
        <TextField label='ID Expiry Date' type="date" value={this.state.idNumber} onChange={this.handleIdNumberChange} InputLabelProps={{
          shrink: true,
        }}/>
        <div className="picker">
          {/* <DatePicker keyboard clearable animateYearScrolling={false} value={this.state.idExpiry} onChange={this.handleIdExpiryChange}/> */}
        </div>
        </div>
    );
  }
}