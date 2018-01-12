import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Typography from 'material-ui/Typography'
import styles from '../../styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';

const cstyles = {
  card: {
    maxWidth: "345px",
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
  }

  render() {
    return (
      <div>
   <Typography type="title" style={styles.content}>
   Documents
 </Typography>       

        {this.state.documents.length > 0 && 
          this.state.documents.map((d) => {
          return (
          <Card style={cstyles.card} key={`document-${d.documentid}`}>
          <CardMedia
            image={d.preview}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {d.documentType}
            </Typography>
            <Typography component="p">
              {d.content}
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