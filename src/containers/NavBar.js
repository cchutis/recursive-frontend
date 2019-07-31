import React, { Component } from 'react'
import Logo from '../components/Logo'
import AddProjectForm from '../components/AddProjectForm';
import SearchBar from '../components/SearchBar'
import GlitchEffect from 'react-glitch-effect'
import Particles from 'react-particles-js'
import FilterBy from '../components/FilterBy'
import EditProjectForm from '../components/EditProjectForm'


export default class NavBar extends Component {

    state = {
        opened: true,
        projectFormOpen: false,
        taskFormOpen: false
    }

    showProjectForm = () => {
        this.setState({
            projectFormOpen: !this.state.projectFormOpen
        })
    }

    showTaskForm = () => {
        this.setState({
            taskFormOpen: !this.state.taskFormOpen
        })
    }

    render() {
        return (
            <div className="navbar-container">
                <GlitchEffect>
                    <Logo back={this.props.backToProjects} />
                </GlitchEffect>
                <SearchBar searchChange={this.props.searchChange} searchText={this.props.searchText} />
                <FilterBy projectTypeFilter={this.props.projectTypeFilter}/>
                {this.props.projectLoaded ? 
                <button className="back-btn" onClick={() => this.props.backToProjects()}>Back to Projects</button>
                :
                null
                }
                <br />
                {this.props.projectLoaded ?
                <button className="back-btn" onClick={this.showTaskForm}>Add New Task</button>
                :
                <button className="back-btn" onClick={this.showProjectForm}>
                    {this.state.projectFormOpen ? "Cancel Creation" : "Add New Project"}
                </button>
                }
                {this.state.projectFormOpen ? <AddProjectForm createNewProject={this.props.createNewProject}/> : null}
                {this.props.editProject ? <EditProjectForm editProject={this.props.editProject} renderEdits={this.props.renderEdits}/> : null}
                <button className="logout-btn" onClick={() => this.props.logout()}>LogOut</button>
                <div className="nav-bkg">
                    <Particles width="100%" height="100vh"/>
                </div>
            </div>
        )
    }
}
