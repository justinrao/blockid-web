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

export default class AccessRequest extends React.Component {
  state = {
    auth: true,
    user: {
        bid: '',
    },
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div style={styles.containerWrap}>
        <Card style={styles.info}>
          <div>
            <CardContent>
              <Typography type='headline'>The Goldman Sachs Group, Inc.</Typography>
              <Typography type='subheading'>HQ: 200 West Street, Manhattan, New York City, New York, U.S</Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

