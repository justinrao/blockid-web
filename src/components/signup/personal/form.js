import React, { Component } from 'react';
import { Step, Icon } from 'semantic-ui-react'
import InitialForm from './initial';
import AddressForm from './address';
import IdentityForm from './identity';
import UploadIdentificationForm from './upload';
import Card, {CardContent, CardHeader} from 'material-ui/Card'
const ddstyles = {
  customWidth: {

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  }
};
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    let step = +this.props.match.params.step || 0;
    this.state = {
      id: this.props.match.params.userId,
      step,
      first: '',
      middle: '',
      last: '',
      phone: '',
      password: '',
      password2: '',
      dob: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      province: '',
      postalcode: '',
      country: '',
      error: ''
    };
  }
  confirmDialog = null

  handleUserIdChange = (event) => this.setState({ ...this.state, id: event.target.value });

  render() {

    const header = (
      <Step.Group widths={5} size="tiny">
            <Step link active={this.state.step === 0}>
            <Icon name='user'/>
              <Step.Content>
                <Step.Title>Account</Step.Title>
                <Step.Description>Enter account details</Step.Description>
              </Step.Content>
            </Step>
            <Step link active={this.state.step === 1}>
            <Icon name='marker'/>
              <Step.Content>
                <Step.Title>Address</Step.Title>
                <Step.Description>Enter your current address</Step.Description>
              </Step.Content>
            </Step>
            <Step link active={this.state.step === 2}>
            <Icon name='credit card'/>
              <Step.Content>
                <Step.Title>Identification</Step.Title>
                <Step.Description>Enter government issued identification</Step.Description>
              </Step.Content>
            </Step>
            <Step link active={this.state.step === 3}>
              <Icon name='file outline'/>
              <Step.Content>
                <Step.Title>Documentation</Step.Title>
                <Step.Description>Upload identification documents</Step.Description>
              </Step.Content>
            </Step>
            <Step link active={this.state.step === 4}>
              <Icon name='protect'/>
              <Step.Content>
                <Step.Title>Validation</Step.Title>
                <Step.Description>Verify identify</Step.Description>
              </Step.Content>
            </Step>
        </Step.Group>
    )
    return (
        <Card >
        <CardContent style={ddstyles.root}>
         {header}
          {this.state.step === 0 && <InitialForm {...this.props}/>}
          {this.state.step === 1 && <AddressForm {...this.props}/>}
          {this.state.step === 2 && <IdentityForm {...this.props}/>}
          {this.state.step === 3 && <UploadIdentificationForm {...this.props}/>}
        </CardContent>
      </Card>
        );
  }
}