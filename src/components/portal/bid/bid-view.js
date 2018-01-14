import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import {AuditList, RiskRating, CompanyInfo, Checklist, Subsidiaries, Contacts, Documents, Directors} from '.'
import Typography from 'material-ui/Typography'
import styles from '../../styles'
import Tabs, {Tab} from 'material-ui/Tabs'
import Link from 'react-router-dom/Link';

const muiStyles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.background.paper,
    },
  });

  
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
        open: false,
        client: this.props.store.bid || {}
      };        

  }

  componentWillMount() {
    if (this.props.match.params.bid) {
       this.props.store.getBid(this.props.match.params.bid);
       this.setState({...this.state, client: this.props.store.bid || {}})
    }
  }
//   componentWillUpdate() {
//       this.setState({...this.state, client: this.props.store.bid || {}})
//   }

  render() {
    let {bid, view} = this.props.match.params;
    const client = this.props.store.bid || {};
    view = view || 'checklist' 
    return (
      <div style={styles.containerColumn}>
          <CompanyInfo style={styles.contrastBackground} {...this.props} client={client}/>
          <Tabs style={{...styles.contrastBackground, ...styles.tab}}
            value={view}
            fullWidth
          >
            <Tab label="audit" value="audit" component={Link} to={`/portal/bid/${bid}/audit`}/>
            <Tab label="checklist" value="checklist" component={Link} to={`/portal/bid/${bid}/checklist`}/>
            <Tab label="contacts" value="contacts" component={Link} to={`/portal/bid/${bid}/contacts`}/>
            <Tab label="directors" value="directors" component={Link} to={`/portal/bid/${bid}/directors`}/>
            <Tab label="documents" value="documents" component={Link} to={`/portal/bid/${bid}/documents`}/>
            <Tab label="subsidiaries" value="subsidiaries" component={Link} to={`/portal/bid/${bid}/subsidiaries`}/>
          </Tabs>
         {view === 'audit' && ( <AuditList {...this.props} audits={client.auditLogs}/>)}
         {view === 'checklist' && ( <Checklist {...this.props}/>)}
         {view === 'contacts' && ( <Contacts contacts={client.contacts} {...this.props}/>)}
         {view === 'directors' && ( <Directors directors={client.directors} {...this.props}/>)}
         {view === 'documents' && ( <Documents documents={client.documents} {...this.props}/>)}
         {view === 'subsidiaries' && ( <Subsidiaries subsidiaries={client.subsidiaries} {...this.props}/>)}          
      </div>
    );
  }
}