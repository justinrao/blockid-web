import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Typography from 'material-ui/Typography'
import styles from '../../styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';

const cstyles = {
  card: {
    maxWidth: "345",
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
        {name: 'Contract 123', synopsis:'A contract to specify business relation', audit: 'Last updated: Jun 20, 2008', preview: ''},
        {name: 'Articles of Corporation', synopsis:'Articles of incorporation, also referred to as the certificate of incorporation or the corporate charter, act as a charter to establish the existence of a corporation in the United States and Canada, and are filed with the Secretary of State, or other company registrar.', audit: 'Last updated: Jun 20, 2008', preview: ''}
      ]
    };
  }

  render() {
    return (
      <div>
        <Typography type="title">
          Documents
        </Typography>       

        {this.state.documents.length > 0 && 
          this.state.documents.map((document) => {
          return (
          <Card style={cstyles.card}>
          <CardMedia
            image={document.preview}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {document.name}
            </Typography>
            <Typography component="p">
              {document.synopsis}
            </Typography>
            <Typography component="p" align="right">
              {document.audit}
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