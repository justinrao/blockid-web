import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import { Switch} from 'react-router-dom';

import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import styles, {primary} from '../styles';
import SearchBar from '../utils/SearchBar'
import {PropsRoute} from '../Layout'
import {BidView} from './bid';
import AccessRequest from './access';
import { getAuditLog } from '../../actions/bidActions.js'
import Link from 'react-router-dom/Link';

const menuButtonStyle = {
    marginLeft: -12,
    marginRight: 20,
};

export default class PortalLandingPage extends React.Component {
    constructor(props) {
        super(props);
        const {bid, view} = this.props.match.params;
        this.state = {
            bid,
            view,
            auth: true,
            user: {
                name: 'John Smith',
            },
            open: false
          };        
    }

  handleMenu = event => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  render() {
    const { auth, open } = this.state;
    return (
      <div style={{width: '100%'}}>

        <AppBar style={{background: primary}} position="static">
          <Toolbar>
            {/* <IconButton style={menuButtonStyle} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography type="title" color="inherit" style={styles.container} component={Link} to={`/portal`}>
              RBC bID - Centralized Client Identification
            </Typography>
            {auth && (
                <div>
                {/* <SearchBar searchTitle="Search" style={styles.content}/> */}
                <IconButton
                  aria-owns={this.state.open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Switch>
            <PropsRoute exact path="/portal" component={AccessRequest} store={this.props.store}></PropsRoute>
            <PropsRoute exact path="/portal/:search" component={AccessRequest} store={this.props.store}></PropsRoute>
            <PropsRoute exact path="/portal/bid/:bid" component={BidView} store={this.props.store}></PropsRoute>
            <PropsRoute exact path="/portal/bid/:bid/:view" component={BidView} store={this.props.store}></PropsRoute>
        </Switch>
        { this.state.bid && (<BidView {...this.props} />)}           
      </div>
    );
  }
}
