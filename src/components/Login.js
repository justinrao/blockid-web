import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card, {CardActions, CardContent, CardHeader} from 'material-ui/Card';
import styles from './styles'
const style = {
  root: {
    margin: 'auto',
    width: '100%',
  }  
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
    };
  }

  handleUserIdChange = (event) => this.setState({ ...this.state, userId: event.target.value, error: '' });
  handlePasswordChange = (event) => this.setState({ ...this.state, password: event.target.value, error: '' });

  handleLogin = () => {
    if (this.state.password) {
        this.props.store.login(this.state)
    }
  }
  render() {
    return (
      <Card style={style.root}>
        <CardHeader style={{textAlign: 'center', background: '#dedede'}} title='SIGN IN'/>
        <CardContent>
          <TextField label='Username or Email' fullWidth={true} value={this.state.userId} onChange={this.handleUserIdChange} /><br />
          <TextField label='Password' fullWidth={true} value={this.state.password} type='password' onChange={this.handlePasswordChange} />
        </CardContent>
        <CardActions>
            <Button style={styles.actionFull} raised color="contrast" onTouchTap={this.handleLogin}>Login</Button>
        </CardActions>
      </Card>
    );
  }
}