import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import Search from 'material-ui/svg-icons/action/search'
import Close from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton'
import { grey500 } from 'material-ui/colors';


const styles = {
    block: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flexStart'
    },
    search: {
        marginTop: 10,
        marginRight: 24,
        height: 30,
        width: 30
    }
}

export default class SearchBar extends Component {
    handleSearchChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event, event.target.value)
        }
    }
    handleClear = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event, '')
        }
    }
    render() {
        return (
            <div style={{ ...this.props.style, ...styles.block }}>
                <Search style={styles.search} color={grey500} />
                <TextField underlineShow={false} hintText={this.props.searchTitle || 'Search'} onChange={this.handleSearchChange} value={this.props.value} fullWidth={true} />
                <IconButton onTouchTap={this.handleClear}><Close /></IconButton>
            </div>
        );
    }
}