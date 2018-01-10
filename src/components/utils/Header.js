import React, { Component } from 'react';
import {TableRow, TableHeaderColumn} from 'material-ui/Table';

class Header extends Component {
  render() {
		let {headers, ...props} = this.props;
		return (
      <TableRow {...props}>
        { headers.map((m, i) =>
          <TableHeaderColumn key={i}>{m.name}</TableHeaderColumn>
        )}
      </TableRow>
		)
	}
}

export default Header;