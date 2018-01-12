import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import List, {ListItem, ListItemText} from 'material-ui/List';
import {Check} from 'material-ui-icons';

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
};
export default class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      checklist: [
        {label: 'Label', audit: 'Audit Info'}
      ]
    };
  }

  render() {
    return (
      <div styles="ddstyles.root">
        {this.state.checklist.length > 0 && 
          <List>
          {this.state.checklist.map((item) => {
                return <ListItem><Check /><ListItemText primary={item.label} secondary={item.audit}/></ListItem>
              })
              }
          </List>          
        }
      </div>
    );
  }
}