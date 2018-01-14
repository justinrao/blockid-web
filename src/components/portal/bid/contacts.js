import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Typography from 'material-ui/Typography'
import styles from '../../styles'
import List, {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {SettingsPhone} from 'material-ui-icons';
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider';

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
      contacts: [{
          "$class": "com.rbc.bid.Contact",
          "contactPersonalName": "Kate Amar",
          "phoneNumber": "1-212-902-0300",
          "contactType": "Investors Relationship",
          "email": "gs-investor-relations@gs.com",
          "contactAddress": {
              "$class": "com.rbc.bid.Address",
              "addressLine1": "200 West Street, 29th Floor",
              "addressLine2": "",
              "city": "New York",
              "province": "NY",
              "country": "USA",
              "postalCode": "10282"
          }
      },
          {
              "$class": "com.rbc.bid.Contact",
              "contactPersonalName": "Alan Jackson",
              "phoneNumber": "1-201-793-5170",
              "contactType": "Prospectus Department",
              "email": "prospectus-ny@ny.email.gs.com  ",
              "contactAddress": {
                  "$class": "com.rbc.bid.Address",
                  "addressLine1": "Goldman Sachs & Co. LLC",
                  "addressLine2": "100 Burma Road",
                  "city": "Jersey City",
                  "province": "NJ",
                  "country": "USA",
                  "postalCode": "07305"
              }
          }
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
          {contacts.map((item, index) => {
                return <div><ListItem key={`contact-${index}`}><Avatar><SettingsPhone /></Avatar>
                    <ListItemText primary={`${item.contactType}  - ${item.contactPersonalName}`} secondary={item.phoneNumber}/></ListItem><Divider/></div>
              })
              }
          </List>          
        }
        
          
      </div>
    );
  }
}