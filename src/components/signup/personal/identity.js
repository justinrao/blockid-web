import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ConfirmDialog from '../../utils/ConfirmDialog'
import DatePicker from 'material-ui/DatePicker';
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

export default class IdentityForm extends Component {
  constructor(props) {
    super(props);
    let idtype = 'Select type of ID';
    this.state = {
      idtype: '',
      idNumber: '',
      idExpiry: '',
      error: ''
    };
  }
  confirmDialog = null

  handleSinChange = (event) => this.setState({ ...this.state, sin: event.target.value });
  handleIdNumberChange = (event) => this.setState({ ...this.state, idNumber: event.target.value });
  handleIdTypeChange = (event, index, value) => this.setState({ ...this.state, idtype: value });
  handleIdExpiryChange = (event) => this.setState({ ...this.state, idExpiry: event.target.value });
  
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
        <TextField {...styles} floatingLabelText='Social Insurance Number (SIN)' value={this.state.sin} onChange={this.handleSinChange} disabled={userId && true} />
        <SelectField {...styles} floatingLabelText="Select Type of ID" value={this.state.idtype} style={ddstyles.customWidth} onChange={this.handleIdTypeChange} autoWidth={false}>
              {this.props.store.idtypes.map((g) => {
                return <MenuItem key={g.id} value={g.id} label={g.label} primaryText={g.label} />
              })
              }
        </SelectField>
        <TextField {...styles} floatingLabelText='ID Number' type="phone" value={this.state.idNumber} onChange={this.handleIdNumberChange} />
        <DatePicker {...styles}  floatingLabelText='Expiry Date' value={this.state.idExpiry} onChange={this.handleIdExpiryChange}/>
        </div>
    );
  }
}