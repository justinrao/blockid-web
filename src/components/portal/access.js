import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import styles, {primary} from '../styles';
import Card, { CardContent } from 'material-ui/Card';
import {Check} from 'material-ui-icons';
import CardActions from 'material-ui/Card/CardActions';
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom';

export default class AccessRequest extends React.Component {
  constructor(props) {
    super(props);
    this.props.store.getBids();
  }

  handleAccess = (bid) => {
    this.props.store.requestAccess(bid);
  }

  render() {
    const companies = this.props.store.bids || [];
    return (
      <div style={styles.containerWrap}>
      { companies.map(company => {
        return (<Card style={styles.info} key={`company-${company.clientBID}`}>
        <CardContent style={styles.container}>
          <div style={styles.containerColumn}>
            <Typography type='headline'>{company.legalName}</Typography>
            <Typography type='subheading'>HQ: {company.legalAddress.country}</Typography>
          </div>
        </CardContent>
        <CardActions>
        {company.access !== "GRANTED" && (<Button raised color="primary"onTouchTap={() => this.handleAccess(company.clientBID)} disabled={company.access === 'INPROGRESS'}>Request Access</Button>)}
        {company.access === "GRANTED" && (<Button style={styles.action} raised color="contrast" component={Link} to={`/portal/bid/${company.clientBID}/`}>Open</Button>)}

        </CardActions>
      </Card>)

      })
      }
      </div>
    );
  }
}

