import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ConfirmDialog extends React.Component {
  state = {
    open: this.props.open || false
  };

  open = () => this.setState({open: true})

  handleClose = () => {
    this.setState({open: false});
    if (this.props.onRequestClose && typeof this.props.onRequestClose === 'function') {
      this.props.onRequestClose()
    }
  };

  handleConfirm = () => {
    this.setState({open: false});
    if (this.props.onConfirm && typeof this.props.onConfirm === 'function') {
      this.props.onConfirm()
    }
  }
  render() {
    const actions = [
      <FlatButton
        label={this.props.cancelText || 'Cancel'}
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label={this.props.confirmText}
        secondary={true}
        onTouchTap={this.handleConfirm}
      />,
    ];
    return (
      <Dialog
        title={this.props.title}
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        {this.props.message}
      </Dialog>
    );
  }
}