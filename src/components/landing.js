import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {SignUpForm} from './signup'
import Card, {CardHeader, CardContent} from 'material-ui/Card'

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
              <h3>Centralized client identification</h3>
              <ul style={{textAlign: 'left', listStyleType: 'circle'}}>
                  <li>Secure
                  <ul style={{textAlign: 'left', listStyleType: 'circle'}}><li>Fast
                  <ul style={{textAlign: 'left', listStyleType: 'circle'}}><li>Reliable
                  <ul style={{textAlign: 'left', listStyleType: 'circle'}}><li>Audit chain</li></ul></li></ul></li></ul></li>
              </ul>
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