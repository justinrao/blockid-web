import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Typography from 'material-ui/Typography'
import styles from '../../styles'
import List, {ListItem, ListItemText} from 'material-ui/List';
import moment from 'moment'
import {Check} from 'material-ui-icons';

export default class Directors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      directors: [
        {name: "Fringe, Peter - CEO", audit: "Last updated: 8 Jul, 2015"},
        {name: "Lennon, Frida - CFO", audit: "Last updated: 31 Jan, 2017"}
      ]
    };
  }

  render() {
    return (
      <div>
        <Typography type="title" style={styles.content}>
           Directors
        </Typography>       
        {this.state.directors.length > 0 && 
          <List>
          {this.state.directors.map((item) => {
                return <ListItem><Check /><ListItemText primary={item.name} secondary={item.audit}/></ListItem>
              })
              }
          </List>          
        }
          
      </div>
    );
  }
}