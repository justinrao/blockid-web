import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Typography from 'material-ui/Typography'
import styles from '../../styles'

export default class DocumentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      documents: []
    };
  }

  render() {
    return (
      <div>
   <Typography type="title" style={styles.content}>
   Documents
 </Typography>       

          
      </div>
    );
  }
}