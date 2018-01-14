import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Typography from 'material-ui/Typography'
import styles from '../../styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';

const cstyles = {
  card: {
    minWidth: 400,
      width: "100%",
      "margin-bottom": 10
  },
  media: {
    height: 200,
  },
};

export default class DocumentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      documents: [
        { "$class": "com.rbc.bid.Document", "documentId": "2347", "documentType": "CERTIFICATE_OF_INCORPORATION", "content": "Exercitation sunt.", "updatedBy": "Ullamco labore eiusmod.", "expiryDate": "Proident ea ex et eu." }
      ]
    };
    console.log(this.props.store.documentType)
  }
  getDocumentType(type) {
    const s = this.props.store.documentTypes.find((r) => r.id === type);
    return s.label || type;
  }

  render() {
    let {documents} = this.props;
    documents = documents || this.state.documents || [];    
    return (
      <div style={styles.containerWrap}>
        {documents.length > 0 && 
          documents.map((d) => {
          return (
          <Card style={cstyles.card} key={`document-${d.documentId}`}>
          <CardMedia
            image={d.preview}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {this.getDocumentType(d.documentType)}
            </Typography>
            <Typography component="p">
              {d.description}
            </Typography>
            <Typography component="p">
              Updated by: {d.updatedBy}
            </Typography>
            <Typography component="p">
              Expires: {d.expiryDate}
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              View
            </Button>
            <Button dense color="primary">
              Audit
            </Button>
          </CardActions>
        </Card>
          );
          })
        }
          
    </div>
    );
  }
}