import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Typography from 'material-ui/Typography'
import styles from '../../styles'
import List, {ListItem, ListItemText} from 'material-ui/List';
import moment from 'moment'
import {Check, AccountCircle} from 'material-ui-icons';

export default class Directors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      directors: [
        {id: 1, name: "Fringe, Peter - CEO", audit: "Last updated: 8 Jul, 2015"},
        {id: 2, name: "Lennon, Frida - CFO", audit: "Last updated: 31 Jan, 2017"}
      ]
    };
  }

  render() {
    let {directors} = this.props;
    directors = directors || this.state.directors;
  
    return (
      <div style={styles.containerWrap}>     
        {directors.length > 0 && 
          <List>
          {directors.map((item, index) => {
                return <ListItem key={`director-${index}`}><AccountCircle /><ListItemText primary={item.name} secondary={item.role}/></ListItem>
              })
              }
          </List>          
        }
          
      </div>
    );
  }
}