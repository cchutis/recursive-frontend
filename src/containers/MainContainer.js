import React, { Component } from 'react'
import NavBar from './NavBar'
import ProjectContainer from './ProjectContainer'
import TaskContainer from './TaskContainer'

const API = 'http://localhost:4000/projects'

export default class MainContainer extends Component {

    state = {
        projects: [],
        projectSelected: null,
    }

    componentDidMount() {
        this.fetchProjects()
    }

    fetchProjects = () => {
        fetch(API)
        .then(r => r.json())
        .then(data => {
            this.setState({
                projects: data
            })
        })
    }

    viewProject = (id) => {
      const foundProject = this.state.projects.find(project => project.id === id)
      console.log(foundProject)
      if(foundProject) {
          this.setState({
              projectSelected: foundProject
          })
        }
    }

    backToProjects = () => {
        this.setState({
            projectSelected: null
        })
    }

    render() {
        return (
            <div className="main-container">
                <NavBar backToProjects={this.backToProjects}/>
                {this.state.projectSelected ? <TaskContainer selectedProject={this.state.projectSelected} /> : <ProjectContainer projectList={this.state.projects} viewProject={this.viewProject} />}
            </div>
        )
    }
}
