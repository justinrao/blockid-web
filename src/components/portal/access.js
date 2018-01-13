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
import {Check, Search, Clear} from 'material-ui-icons';
import CardActions from 'material-ui/Card/CardActions';
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import FormControl from 'material-ui/Form/FormControl';
import CircularProgress from 'material-ui/Progress/CircularProgress';
export default class AccessRequest extends React.Component {
  constructor(props) {
    super(props);
    const {search} = props.match.params;
    if (!!search) {
      this.props.store.findBid(search);
    } else {
      // TODO remove for Monday
      this.props.store.getBids();
    }
    this.state = {
      search: search || ''
    }
  }

  handleAccess = (bid) => {
    this.props.store.requestAccess(bid);
  }

  handleSearchChange = (event) => this.setState({ ...this.state, search: event.target.value });
  clearSearch = () => {
    this.setState({ ...this.state, search: '' });
  }

  handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.doSearch();
      event.preventDefault();
    } else if (event.key === 'Escape') {
      this.clearSearch();
      event.preventDefault();
    }

  }

  doSearch = (event) => {
    this.props.store.findBid(this.state.search);
  }
  render() {
    const companies = this.props.store.bids || [];
    return (
      <div style={styles.containerWrap}>

        <FormControl fullWidth={true}>
          {/* <InputLabel htmlFor="search">Search</InputLabel> */}
          <Input
            id="adornment-search"
            placeholder="Search for Company"
            value={this.state.search}
            onChange={this.handleSearchChange}
            onKeyPress={this.handleSearchKeyPress}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  {!this.state.search ? <Search onClick={this.doSearch}/> : <Clear onClick={this.clearSearch}/>}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div style={styles.info}>
      { companies.map(company => {
        const isPending = () => {return company.access === "INPROGRESS"};
        const address = company.legalAddress;
        return (<Card style={{...styles.info}} key={`company-${company.clientBID}`}>
        <CardContent style={styles.containerWrap}>
          <div style={styles.containerColumn}>
            <Typography type='headline'>{company.legalName}</Typography>
            <Typography type='subheading'>Headquarter: {address.addressLine1}, {address.city}, {address.province}, {address.country}</Typography>
          </div>
        </CardContent>
        <CardActions>
        {company.access !== "GRANTED" && (<Button raised color="primary" onTouchTap={() => this.handleAccess(company.clientBID)} disabled={isPending()}>{isPending() ? 'Pending': 'Request Access'}</Button>)}
        {isPending() && (<CircularProgress />)}
        {company.access === "GRANTED" && (<Button style={styles.action} raised color="contrast" component={Link} to={`/portal/bid/${company.clientBID}/`}>Open</Button>)}

        </CardActions>
      </Card>)

      })
      }
      </div></div>
    );
  }
}

