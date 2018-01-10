import React, { Component } from 'react'
import {TableRow, TableRowColumn} from 'material-ui/Table'

export default class User extends Component {

  render() {
		const { user, permissions, ...otherProps } = this.props;
		return (
			<TableRow {...otherProps}>
			  {otherProps.children[0] /* checkbox passed down from Table-Body*/}
        <TableRowColumn>{user.Id}</TableRowColumn>
        <TableRowColumn>{user.FirstName}</TableRowColumn>
        <TableRowColumn>{user.LastName}</TableRowColumn>
        <TableRowColumn>{user.Authority.Name}</TableRowColumn>
      </TableRow>
		);
  }
}