import React, { Component } from 'react';
import { relative, isAbsolute } from 'path';
import Toolbar, {ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
const ddstyles = {
  customWidth: {

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 'auto',
    width: '40%'

  },
  dropzone: {
    width: '100%',
    background: '#EFEFEF',
    border: '2px dashed',
    borderColor: '#212121',
    minHeight: '345',
    textAlign: 'center',
  },
  dropzoneThumb: {
    maxWidth: '90%',
    marginTop: '10',
    marginBottom: '10'
  },
  dropzoneHeader: {
    fontSize: '1.1em',
    marginTop: '10',
  }
};
export default class SubsidiariesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      subsidiaries: []
    };
  }

  render() {
    return (
      <div>
   <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text="Subsidiaries" />
      </ToolbarGroup>
    </Toolbar>          
          
      </div>
    );
  }
}