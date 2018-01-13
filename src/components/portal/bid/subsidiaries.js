import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Typography from 'material-ui/Typography'
import styles from '../../styles'

export default class SubsidiariesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      subsidiaries: []
    };
  }

  render() {
    return (
      <div style={styles.containerWrap}>
         
      </div>
    );
  }
}