import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import {UpdateUser, Users as UsersComp} from './users'
import {PersonalSignUpForm} from './signup'
import Login from './Login';

import { Switch, Route} from 'react-router-dom';

import MenuItem from 'material-ui/MenuItem';

import Exit from 'material-ui/svg-icons/action/exit-to-app'
import People from 'material-ui/svg-icons/social/people'
import IconButton from 'material-ui/IconButton'

let appBarStyle = {
    backgroundColor: '#212121' 
}
const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}  
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };    
    injectTapEventPlugin();
  }
  componentWillMount() {
    // if (this.props.session.sessionId)
    //   this.props.getProfile();
  }
  componentWillUpdate(props) {
    // if (props.profile.fetchData)
    //   this.props.getData(props.permissions);
  }
  handleToggle = () => {
    this.setOpen(!this.state.open)
  }
  setOpen = (open) => {
    this.setState({...this.state, open})
  }  
  handleLogout = () => {
    this.props.logout();

  }
  closeDrawer = () => {
    this.setState({...this.state, open: false})
  }
  render() {
      let {Users} = this.props.permissions;
      const store = { ...this.props };
      return (
        <MuiThemeProvider>
        <div>
          <div>
            <Drawer docked={false} open={this.state.open} onRequestChange={this.setOpen}>
            <AppBar title='Menu' style={appBarStyle} onLeftIconButtonTouchTap={this.handleToggle}/>
              <MenuItem primaryText="Users" leftIcon={<People />} containerElement={<Link to="/" />} onTouchTap={this.closeDrawer}/>
            </Drawer>
          <AppBar style={appBarStyle} iconElementRight={<IconButton><Exit /></IconButton>} onLeftIconButtonTouchTap={this.handleToggle} onRightIconButtonTouchTap={this.handleLogout}/>
            <Switch>
              <PropsRoute exact path="/login" component={Login} ></PropsRoute>
              <PropsRoute exact path="/signup" component={Users} ></PropsRoute>
              <PropsRoute exact path="/signup/personal" component={PersonalSignUpForm} ></PropsRoute>
              <PropsRoute exact path="/signup/personal/:step" component={PersonalSignUpForm} ></PropsRoute>              
              <PropsRoute exact path="/user/add" component={UpdateUser} store={store}></PropsRoute>
              <PropsRoute exact path="/user/:userId" component={UpdateUser} store={store}></PropsRoute>
              <PropsRoute exact path="/" component={UsersComp} store={store}></PropsRoute>
            </Switch>
        </div>
      </div>
      </MuiThemeProvider>  
      );
  }
}

export default Layout;