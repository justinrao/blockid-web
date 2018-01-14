import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import Divider from 'material-ui/Divider'
import styles from '../../styles'
import RiskRating from './risk-rating'
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import Typography from 'material-ui/Typography/Typography';
import moment from 'moment';

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
      dateOfIncorporation: '1869-07-04T00:00:00.000Z'
    };
  }
  render() {
    const labelStyle = {
      flexBasis: '40%',
      flexGrow: 'unset'
    }
    const addressStyle = {
      ...labelStyle,
      alignItems: 'flex-start',
      alignContent: 'flex-start'
      
    }
    const {client} = this.props;
    return (
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type="title" style={styles.content}>{client.legalName}</Typography>
        <RiskRating style={{flex: '0 0 20%'}} rating={client.riskRating} ratings={this.props.store.riskRating}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <List style={styles.info}>
        <ListItem >
        <ListItemText style={addressStyle} primary={this.labels.legalAddress} />
        { client.legalAddress && <ListItemText primary={(
          <div>
          <div>{client.legalAddress.addressLine1}</div>
          <div>{client.legalAddress.addressLine2}</div>
          <div>{client.legalAddress.city}, {client.legalAddress.province}</div>
          <div>{client.legalAddress.country}</div>
          <div>{client.legalAddress.postalCode}</div>
          </div>
        )} />}
      </ListItem>
        </List>
        <List style={styles.info}>
          <ListItem >
            <ListItemText style={labelStyle} primary={this.labels.holdingCompany} />
            <ListItemText style={styles.left} primary={client.holdingCompany} />
          </ListItem>
          <ListItem >
            <ListItemText style={labelStyle} primary={this.labels.countryOfIncorporation} />
            <ListItemText style={styles.left} primary={client.countryOfIncorporation} />
          </ListItem>
          <ListItem >
            <ListItemText style={labelStyle} primary={this.labels.dateOfIncorporation} />
            <ListItemText style={styles.left} primary={moment(client.dateOfIncorporation).format('MMMM Do YYYY')} />
          </ListItem>
          </List>
</ExpansionPanelDetails>
</ExpansionPanel>
    );
  }
}