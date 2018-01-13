import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import List, {ListItem, ListItemText} from 'material-ui/List';
import {Check} from 'material-ui-icons';
import { green } from 'material-ui/colors';
import styles from '../../styles';

const ddstyles = {
  green: {
    color: green[500]
  }
};
export default class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      checklist: [
        {id: 1, label: 'Required documents - verified', audit: 'Last updated by: RSmith - Oct 25, 2017'},
        {id: 2, label: 'Contacts - verified', audit: 'Last updated by: RSmith - Oct 24, 2017'},
        {id: 3, label: 'Directors and stakeholders - verified', audit: 'Last updated by: RSmith - Oct 23, 2017'}
      ]
    };
  }

  render() {
    return (
      <div style={styles.containerWrap}>
        {this.state.checklist.length > 0 && 
            <List>
            {this.state.checklist.map((item) => {
                  return <ListItem key={`checkitem-${item.id}`}><Check style={ddstyles.green} /><ListItemText primary={item.label} secondary={item.audit}/></ListItem>
                })
                }
            </List>
        }
      </div>
    );
  }
}