import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Typography from 'material-ui/Typography'
import styles from '../../styles'
import List, {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {SettingsPhone} from 'material-ui-icons';

const ddstyles = {
  customWidth: {

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 'auto',
    width: '40%'
  }
};
export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      contacts: [
        {id: 1, label: "Doe, Jamie - Compliance", audit: "Last updated: Dec 14, 2010"},
        {id: 2, label: "Vedder, Evan - Legal", audit: "Last updated: Feb 10, 2015"}
      ]
    };
  }

  render() {
    let {contacts} = this.props;
    contacts = contacts || this.state.contacts;
    return (
      <div style={styles.containerWrap}>
        {contacts.length > 0 && 
          <List>
          {contacts.map((item) => {
                return <ListItem key={`contact-${item.id}`}><Avatar><SettingsPhone /></Avatar><ListItemText primary={item.label} secondary={item.audit}/></ListItem>
              })
              }
          </List>          
        }
        
          
      </div>
    );
  }
}