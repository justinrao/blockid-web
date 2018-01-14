import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography';
import styles from '../../styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import moment from 'moment'
import {green, blue, orange, red} from 'material-ui/colors';

const ddstyles = {
  customWidth: {

  },
  STANDARD: { color: green[500] },
  MEDIUM: { color: blue[500] },
  HIGH_1: { color: red[500] },
  HIGH_2: { color: red[600] },
  HIGH_3: { color: red[700] },
  RESTRICTED: { color: orange[500] },
  DONE: { color: green[500]},
  INPROGRESS: { color: orange[500] },
  INIT: { color: blue[500] }
};
export default class AuditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      audits: props.audits || [
        {
            "$class": "org.hyperledger.composer.system.UpdateAsset",
            "resources": [
                {
                    "$class": "com.rbc.bid.Client",
                    "clientBID": "7991",
                    "legalName": "Duis id amet.",
                    "holdingCompany": "Cupidatat enim laborum amet.",
                    "legalAddress": {
                        "$class": "com.rbc.bid.Address",
                        "addressLine1": "Magna.",
                        "addressLine2": "Mollit proident.",
                        "city": "In.",
                        "province": "Ea est.",
                        "country": "Reprehenderit cupidatat aliquip laboris anim.",
                        "postalCode": "Enim cupidatat aliquip."
                    },
                    "countryOfOperation": "Esse adipisicing anim.",
                    "countryOfIncorporation": "Sit sit ea sit.",
                    "dateOfIncorporation": "2018-01-12T15:30:35.573Z",
                    "contact": {
                        "$class": "com.rbc.bid.Contact",
                        "contactPersonalName": "Lorem sint.",
                        "phoneNumber": "Id.",
                        "contactAddress": {
                            "$class": "com.rbc.bid.Address",
                            "addressLine1": "Reprehenderit.",
                            "addressLine2": "Sint est excepteur.",
                            "city": "Duis.",
                            "province": "Excepteur magna esse.",
                            "country": "Laboris irure.",
                            "postalCode": "Commodo."
                        }
                    },
                    "kycStatus": "DONE",
                    "documents": [
                        {
                            "$class": "com.rbc.bid.Document",
                            "documentId": "2347",
                            "documentType": "CERTIFICATE_OF_INCORPORATION",
                            "content": "Exercitation sunt.",
                            "updatedBy": "Ullamco labore eiusmod.",
                            "expiryDate": "Proident ea ex et eu."
                        }
                    ],
                    "riskRating": "STANDARD",
                    "updatedBy": "Aute duis velit.",
                    "updateDescription": "Update Certificate of Authorized Signatories"
                }
            ],
            "targetRegistry": {
                "$class": "org.hyperledger.composer.system.Registry",
                "registryId": "com.rbc.bid.Client",
                "name": "Asset registry for com.rbc.bid.Client",
                "type": "Asset",
                "system": false
            },
            "transactionId": "e2dd956e5c85a0677139ea92b20dcde0a887386a4f3c9abe95c09193185c83b4",
            "timestamp": "2018-01-12T15:31:57.550Z"
        },
        {
            "$class": "org.hyperledger.composer.system.AddAsset",
            "resources": [
                {
                    "$class": "com.rbc.bid.Client",
                    "clientBID": "7991",
                    "legalName": "Duis id amet.",
                    "holdingCompany": "Cupidatat enim laborum amet.",
                    "legalAddress": {
                        "$class": "com.rbc.bid.Address",
                        "addressLine1": "Magna.",
                        "addressLine2": "Mollit proident.",
                        "city": "In.",
                        "province": "Ea est.",
                        "country": "Reprehenderit cupidatat aliquip laboris anim.",
                        "postalCode": "Enim cupidatat aliquip."
                    },
                    "countryOfOperation": "Esse adipisicing anim.",
                    "countryOfIncorporation": "Sit sit ea sit.",
                    "dateOfIncorporation": "2018-01-12T15:30:35.573Z",
                    "contact": {
                        "$class": "com.rbc.bid.Contact",
                        "contactPersonalName": "Lorem sint.",
                        "phoneNumber": "Id.",
                        "contactAddress": {
                            "$class": "com.rbc.bid.Address",
                            "addressLine1": "Reprehenderit.",
                            "addressLine2": "Sint est excepteur.",
                            "city": "Duis.",
                            "province": "Excepteur magna esse.",
                            "country": "Laboris irure.",
                            "postalCode": "Commodo."
                        }
                    },
                    "kycStatus": "INIT",
                    "riskRating": "RESTRICTED",
                    "updatedBy": "Aute duis velit.",
                    "updateDescription": "Create record"
                }
            ],
            "targetRegistry": {
                "$class": "org.hyperledger.composer.system.Registry",
                "registryId": "com.rbc.bid.Client",
                "name": "Asset registry for com.rbc.bid.Client",
                "type": "Asset",
                "system": false
            },
            "transactionId": "55e15137bdde7d4e6481bf19ab1011905cf21c8be381a8216cc788cf3e295fb5",
            "timestamp": "2018-01-12T15:30:56.195Z"
        }
    ]
    };
  }

  getRating(rating) {
    const r = this.props.store.riskRating.find((r) => r.id === rating);
    return r.label || rating;
  }
  getStatus(status) {
    const s = this.props.store.kycStatus.find((r) => r.id === status);
    return s.label || status;
  }
  render() {
    return (
      <div style={styles.containerWrap}>
         <Table> 
         <TableHead>
           <TableRow>
             <TableCell style={{fontWeight: 'bold', fontSize: '1.2em'}}>Change</TableCell>
             <TableCell style={{fontWeight: 'bold', fontSize: '1.2em'}}>One RBC Risk Rating</TableCell>
             <TableCell style={{fontWeight: 'bold', fontSize: '1.2em'}}>KYC Status</TableCell>
             <TableCell style={{fontWeight: 'bold', fontSize: '1.2em'}}>Description</TableCell>
             <TableCell style={{fontWeight: 'bold', fontSize: '1.2em'}}>Updated By</TableCell>
             <TableCell style={{fontWeight: 'bold', fontSize: '1.2em'}}>Updated On</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {this.state.audits.map(entry => {
             return (
              <TableRow key={`transactionId-${entry.transactionId}`}>
                <TableCell  style={{fontSize: '1.2em'}}>{entry.$class.replace(/org\.hyperledger\.composer\.system\./,'').replace(/Asset/, '')}</TableCell>
                <TableCell  style={{fontSize: '1.2em', ...ddstyles[`${entry.resources[0].riskRating}`]}}>{this.getRating(entry.resources[0].riskRating)}</TableCell>
                <TableCell  style={{fontSize: '1.2em', ...ddstyles[`${entry.resources[0].KycStatus}`]}}>{this.getStatus(entry.resources[0].kycStatus)}</TableCell>
                <TableCell  style={{fontSize: '1.2em'}}>{entry.resources[0].updateDescription}</TableCell>
                <TableCell  style={{fontSize: '1.2em'}}>{entry.resources[0].updatedBy}</TableCell>
                <TableCell  style={{fontSize: '1.2em'}}>{moment(entry.timestamp).toString()}</TableCell>
              </TableRow>
             );
           })}
         </TableBody>
         </Table>
      </div>
    );
  }
}