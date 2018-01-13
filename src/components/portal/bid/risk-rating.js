import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Typography from 'material-ui/Typography/Typography';

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
export default class RiskRating extends Component {

  render() {
    const r = this.props.ratings.find((r) => r.id === this.props.rating)
    return (
      <Typography type="subheading"><b>One Rating:</b> {(r && r.label) || this.props.rating}</Typography>
    );
  }
}