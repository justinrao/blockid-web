import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import { relative, isAbsolute } from 'path';

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
    background: '#EFEFEF',
    border: '2px dashed',
    borderColor: '#212121',
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
    marginTop: '10',
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