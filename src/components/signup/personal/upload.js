import React, { Component } from 'react';
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