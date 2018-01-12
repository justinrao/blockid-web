import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import {AuditList, Checklist, Directors, Contacts} from '.'
import Typography from 'material-ui/Typography'
import styles from '../../styles'

export default class BidView extends Component {
  constructor(props) {
    super(props);
    const {bid, view} = this.props.match.params;
    this.state = {
        bid,
        view,
        auth: true,
        user: {
            name: 'John Smith',
        },
        open: false
      };        

  }

  render() {
    return (
      <div>
         {this.state.view === 'audit' && ( <AuditList {...this.props}></AuditList>)}
         {this.state.view === 'checklist' && ( <Checklist {...this.props}></Checklist>)}
         {this.state.view === 'directors' && ( <Directors {...this.props}></Directors>)}
         {this.state.view === 'contacts' && ( <Contacts {...this.props}></Contacts>)}
         {this.state.view === 'documents' && ( <AuditList {...this.props}></AuditList>)}
         {this.state.view === 'subsidiaries' && ( <AuditList {...this.props}></AuditList>)}          
      </div>
    );
  }
}