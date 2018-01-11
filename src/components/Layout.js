import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {PersonalSignUpForm, SignUpForm} from './signup'
import Login from './Login';
import Landing from './landing';
import PortalLanding from './portal/landing'

import { Switch, Route} from 'react-router-dom';

import Menu, {MenuItem} from 'material-ui/Menu';

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
  
  handleLogout = () => {
    this.props.logout();

  }
  closeDrawer = () => {
    this.setState({...this.state, open: false})
  }
  render() {
        const store = { ...this.props };
      return (
        <MuiThemeProvider>
        <div>
          <div>
            <Switch>
              <PropsRoute exact path="/signup/personal" component={PersonalSignUpForm} store={store}></PropsRoute>
              <PropsRoute exact path="/signup/personal/:step" component={PersonalSignUpForm} store={store}></PropsRoute>              
              <PropsRoute exact path="/" component={Landing} store={store}></PropsRoute>
              <PropsRoute exact path="/portal" component={PortalLanding} store={store}></PropsRoute>
            </Switch>
        </div>
      </div>
      </MuiThemeProvider>  
      );
  }
}

export default Layout;