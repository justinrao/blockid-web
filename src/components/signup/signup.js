import React, { Component } from 'react';
import {grey700} from 'material-ui/colors';
import {PersonalAccountForm} from './index'

const ddstyles = {
  floatStyle: {
    color: grey700
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 'auto',
    width: '40%'
  }
};
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.userId,
      password: '',
      password2: '',
      error: ''
    };
  }
  confirmDialog = null

  handleUserIdChange = (event) => this.setState({ ...this.state, id: event.target.value });
  handlePasswordChange = (event) => this.setState({ ...this.state, password: event.target.value });
  handlePassword2Change = (event) => this.setState({ ...this.state, password2: event.target.value });

  handleSignUp = () => {
    if (this.state.password && this.state.password === this.state.password2) {
        this.setState({ ...this.state, error: '' })
        this.props.store.addUser(this.state)
    } else {
      if (this.state.password) {
        this.setState({ ...this.state, error: 'Please enter a password.' })
      } else {
        this.setState({ ...this.state, error: 'Passwords do not match.' })
      }
    }
  }
  render() {
    let {userId} = this.props.match.params
    let styles = {
      fullWidth: true,
      floatingLabelStyle: ddstyles.floatStyle,
      underlineStyle: { borderColor: grey700}
    }
    return (
        <div>
        <PersonalAccountForm {...this.props}/>
        </div>
    );
  }
}