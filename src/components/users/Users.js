import React, { Component } from 'react';
import User from './User';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.headers = [
       {name: '', spread: 1},
       {name: 'User Id', spread: 2},
       {name: 'First Name', spread: 3},
       {name: 'Last Name', spread: 3},
       {name: 'Authority', spread: 3}
    ];
  }
  render() {
  let {users, permissions} = this.props.store;
  let items = users.map((u) => {
	  return <User key={u.Id} user={u} permissions={permissions}/>
	});
	return <div>    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text="Users" />
      </ToolbarGroup>
      { permissions.Users.AddUser && <ToolbarGroup lastChild={true}>
        <ToolbarTitle text="Options" />
        <ToolbarSeparator />
        <RaisedButton label="Add User" primary={true} containerElement={<Link to="/user/add" />}/>
      </ToolbarGroup>
      }
    </Toolbar>
  <Table>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableRow>
      <TableHeaderColumn>Options</TableHeaderColumn>
        <TableHeaderColumn>Username</TableHeaderColumn>
        <TableHeaderColumn>First Name</TableHeaderColumn>
        <TableHeaderColumn>Last Name</TableHeaderColumn>
        <TableHeaderColumn>Authority</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody showRowHover={true} displayRowCheckbox={false} >{items}</TableBody>
    </Table></div>
  }
}
