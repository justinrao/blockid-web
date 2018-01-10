import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const styles = {
    padding: '16px 24px 24px 24px'
}
export default class View extends Component {

  render() {
    return (
      <div>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={this.props.title} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Options" />
          <ToolbarSeparator />
          {this.props.actions}
        </ToolbarGroup>
      </Toolbar> 
      <div style={styles}>
        {this.props.children}
      </div>
      </div>
		);
  }
}