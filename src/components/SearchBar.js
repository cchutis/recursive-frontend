import React, { Component } from 'react'

export default class SearchBar extends Component {

    

    
    render() {
        return (
            <input type="text" autoComplete="off" className="search-projects" name="search" placeholder="Find a Project" value={this.props.searchText} onChange={this.props.searchChange}/>
        )
    }
}
