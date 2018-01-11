import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import {grey100,grey700} from 'material-ui/colors';

const ddstyles = {
  customWidth: {

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 'auto',
    width: '40%'

  },
  dropzone: {
    width: '100%',
    background: grey100,
    border: '3px dashed',
    borderColor: grey700,
    minHeight: '345',
    textAlign: 'center',
    
  },
  dropzoneThumb: {
    maxWidth: '90%',
    marginTop: '10',
    marginBottom: '10'
  },
  dropzoneHeader: {
    fontSize: '1.1em',
    marginTop: '10'
  }
};
export default class UploadIdentificationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      files: []
    };
  }
  confirmDialog = null

  onDrop = (acceptedFiles) => this.setState({ ...this.state, files: acceptedFiles });

  render() {
    return (
      <div style={ddstyles.root}>
        <Dropzone onDrop={this.onDrop.bind(this)} style={ddstyles.dropzone} >
              <div style={ddstyles.dropzoneHeader}>Click here or drag and drop identification documents.</div>
              {
                this.state.files.map((file) => {
                  return <img src={file.preview} key={file.name} alt={file.name} style={ddstyles.dropzoneThumb} />
                })
              }
        </Dropzone>
      </div>
    );
  }
}