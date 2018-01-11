import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ConfirmDialog from '../../utils/ConfirmDialog'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Dropzone from 'react-dropzone'

const ddstyles = {
  customWidth: {

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};
export default class UploadIdentificationForm extends Component {
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
      error: '',
      files: []
    };
  }
  confirmDialog = null

  onDrop = (acceptedFiles) => {
    console.log('got here', acceptedFiles);

   this.setState({ ...this.state, files: acceptedFiles });
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
      <div style={ddstyles.root}>
        <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>Try dropping some files here, or click to select files to upload.</p>
              {
                this.state.files.map((file) => {
                  return <img src={file.preview} key={file.name} alt={file.name} />
                })
              }
        </Dropzone>
      </div>
    );
  }
}