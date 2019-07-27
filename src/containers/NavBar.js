import React, { Component } from 'react'
import Logo from '../components/Logo'

export default class NavBar extends Component {

    state = {
        opened: true
    }

    render() {
        return (
            <div className="navbar-container">
                <Logo />
                <button onClick={() => this.props.backToProjects()}>Projects</button>
                <p>Create New Project</p>
            </div>
        )
    }
}
