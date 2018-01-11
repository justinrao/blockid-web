import React from 'react';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';

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
      <Button flat
        label={this.props.cancelText || 'Cancel'}
        color="primary"
        onTouchTap={this.handleClose}
      />,
      <Button flat
        label={this.props.confirmText}
        color="secondary"
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