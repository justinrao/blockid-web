import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography';
import styles from '../../styles'
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
export default class AuditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      audits: []
    };
  }

  render() {
    return (
      <div>
   <Toolbar>
   <Typography type="title" style={styles.content}>
            Audit
          </Typography>       
    </Toolbar>          
      </div>
    );
  }
}