import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {SignUpForm} from './signup'
import Card, {CardHeader, CardContent} from 'material-ui/Card'
import List, {ListItemIcon, ListItemText, ListItem} from 'material-ui/List'

import {Timeline, Security, FastForward, Check} from 'material-ui-icons'

import Login from './Login';
import styles from './styles'

import { Switch, Route} from 'react-router-dom';

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
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signin: false
    };    
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
    this.setOpen(!this.state.sopenignin)
  }
  setOpen = (signin) => {
    this.setState({...this.state, signin})
  }  
  closeDrawer = () => {
    this.setState({...this.state, signin: false})
  }
  render() {
      return (
        <div style={styles.mainContainer}>
            <div style={styles.info}>
              <h1>RBC bID</h1>
              <h3>Centralized Client Identification</h3>
              <List>
        <ListItem >
          <ListItemIcon>
            <Security />
          </ListItemIcon>
          <ListItemText primary="Secure" />
        </ListItem>
        <ul><List>
        <ListItem >
          <ListItemIcon>
          <FastForward />
          </ListItemIcon>
          <ListItemText primary="Fast" />
        </ListItem>
        <ul><List>
        <ListItem>
          <ListItemIcon>
          <Check />
          </ListItemIcon>
          <ListItemText primary="Reliable" />
        </ListItem>
        <ul><List>
        <ListItem>
          <ListItemIcon>
          <Timeline />
          </ListItemIcon>
          <ListItemText primary="Audit Chain" />
        </ListItem>
      </List></ul>
      </List></ul>
      </List></ul>
      </List>
            </div>            
        <div style={styles.containerColumn}>
          <Login style={styles.content} {...this.props} />
          {/* <h3 style={{textAlign: 'center', color: 'white'}}>OR</h3>
          <SignUpForm style={styles.content} {...this.props} /> */}
        </div>
        </div>
      );
  }
}