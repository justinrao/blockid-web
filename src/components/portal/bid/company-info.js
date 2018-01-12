import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import Divider from 'material-ui/Divider'
import styles from '../../styles'

export default class CompanyInfo extends Component {
  constructor(props) {
    super(props);

    this.labels = {
      'legalName': 'Legal Entity Name',
      'holdingCompany': 'Holding Company',
      'legalAddress': 'Legal Address',
      'countryOfIncorporation': 'Country of Incorporation',
      'dateOfIncorporation': 'Date of Incorporation',
    }
    this.state = {
      error: '',
      legalName: 'Some Company',
      holdingCompany: 'Holding company',
      legalAddress: {
        addressLine1: '155 Wellington Avenue W',
        city: 'Toronto',
        province: 'Ontario',
        country: 'Canada'
      },
      countryOfIncorporation: 'Canada',
      dateOfIncorporation: '2015-01-01'
    };
  }
  render() {
    const labelStyle = {
      flexBasis: '40%',
      flexGrow: 'unset'
    }
    return (
      <div>
        <h2>Company Information</h2>

        <div style={styles.container}>
        <List style={styles.info}>
          <ListItem>
            <ListItemText style={labelStyle} primary={this.labels.legalName} />
            <ListItemText style={styles.left} primary={this.state.legalName} />
          </ListItem>
          <Divider/>
          <ListItem >
            <ListItemText style={labelStyle} primary={this.labels.holdingCompany} />
            <ListItemText style={styles.left} primary={this.state.holdingCompany} />
          </ListItem>
          <Divider/>
          <ListItem >
            <ListItemText style={labelStyle} primary={this.labels.countryOfIncorporation} />
            <ListItemText style={styles.left} primary={this.state.countryOfIncorporation} />
          </ListItem>
          <Divider/>
          <ListItem >
            <ListItemText style={labelStyle} primary={this.labels.dateOfIncorporation} />
            <ListItemText style={styles.left} primary={this.state.dateOfIncorporation} />
          </ListItem>
          <Divider/>
        <ListItem >
        <ListItemText style={labelStyle} primary={this.labels.legalAddress} />
        <ListItemText primary={(
          <div>
          <div>{this.state.legalAddress.addressLine1}</div>
          <div>{this.state.legalAddress.addressLine2}</div>
          <div>{this.state.legalAddress.city}, {this.state.legalAddress.province}</div>
          <div>{this.state.legalAddress.country}</div>
          <div>{this.state.legalAddress.postalCode}</div>
          </div>
        )} />            
      </ListItem>
      <Divider/>
        </List>
        </div>        
      </div>
    );
  }
}