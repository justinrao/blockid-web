import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {SignUpForm} from './signup'
import Card, {CardContent} from 'material-ui/Card'

import Login from './Login';

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
      const styles = {
          container: {
            display: 'flex',
            flexDirection: 'row',

          },
          content: {
              flex: '1 1 auto'
          }
      }

      return (
        <div style={styles.container}>
          <Login style={styles.content} {...this.props} />
          <SignUpForm style={styles.content} {...this.props} />
        </div>
      );
  }
}