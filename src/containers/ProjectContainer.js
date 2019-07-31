import React, { Component } from 'react'
import ProjectCard from '../components/ProjectCard'

export default class ProjectContainer extends Component {
    
    displayProjects = () => {
        return this.props.projectList.map(project => {
            return <ProjectCard key={project.id} project={project} viewProject={this.props.viewProject} deleteProject={this.props.deleteProject}/>
        })
    }

    

    render() {
        return (
            <div className="project-container">
                    {this.displayProjects()}   
            </div>
        )
    }
}
