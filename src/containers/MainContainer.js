import React, { Component } from 'react'
import NavBar from './NavBar'
import ProjectContainer from './ProjectContainer'
import TaskContainer from './TaskContainer'
import { CSSTransition } from 'react-transition-group'

const API = 'http://localhost:4000/projects'

export default class MainContainer extends Component {

    state = {
        projects: [],
        filteredProjects: [],
        projectSelected: null,
        newProject: {},
        editProject: null,
        search: ""
    }
    
    componentDidMount() {
        this.fetchProjects()
    }

    searchChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    filteredProjects = () => {
        return this.state.projects.filter(project => {
            return project.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
    }

    projectTypeFilter = (type) => {
        if(type === "clear") {
            this.setState({
                projects: this.state.filteredProjects
            })
        } else {
            this.setState({
                projects: this.state.filteredProjects.filter(project => {
                return project.language.toLowerCase() === type
            })
            })
        }
    }

    fetchProjects = () => {
        fetch(API)
        .then(r => r.json())
        .then(data => {
            this.setState({
                projects: data,
                filteredProjects: data
            })
        })
    }

    renderEdits = (edited) => {
        this.setState({
          projects: this.state.projects.map(project => {
            if (project.id === edited.id) {
              return edited;
            } else {
              return project;
            }
          }),
          filteredProjects: this.state.filteredProjects.map(project => {
            if (project.id === edited.id) {
              return edited;
            } else {
              return project;
            }
          }),
          projectSelected: edited
        });
    }



    createNewProject = (newProject) => {
        this.setState({
            projects: [...this.state.projects, newProject],
            filteredProjects: [...this.state.filteredProjects, newProject]
        })
    }

    viewProject = (name, due_date) => {
      const foundProject = this.state.projects.find(project => project.name === name && project.due_date === due_date)
      if(foundProject) {
          this.setState({
              projectSelected: foundProject
          })
        }
    }

    showEditForm = (projectDetails) => {
        this.setState({
            editProject: projectDetails
        })
    }


    backToProjects = () => {
        this.setState({
            projectSelected: null
        })
    }

    createNewProject = (newVals) => {
        this.setState({
            projects: [...this.state.projects, newVals]
        })
    }

    addTask = (newTask, project_id) => {
      const update =  this.state.projects.map(project => {
            if(project.id === project_id) {
                project.tasks.push(newTask)
                return project
            } else {
                return project
            }
        })
        this.setState({
            projects: update
        })
    }

    deleteTask = (id, project_id) => {
        // debugger
        const foundTask = this.state.projectSelected.tasks.find(task => task.id === id)
        if (foundTask) {
            fetch(`http://localhost:4000/tasks/${foundTask.id}`, {
                method: "DELETE"
            })
            const update = this.state.projects.map(project => {
                if (project.id === project_id) {
                   const foundIndex = project.tasks.findIndex(task => task.id === foundTask.id)
                   project.tasks.splice(foundIndex, 1)
                    return project
                } else {
                    return project
                }
            })
            this.setState({
                projects: update
            })
        }
    }

    deleteProject = (id) => {
        console.log(this.state.projects)
        const updatedProjects = this.state.projects.filter(project => {
            if(project.id === id) {
                return null
            } else {
                return project
            }
        })
        this.setState({
            projects: updatedProjects
        }, () => {
            fetch(`http://localhost:4000/projects/${id}`, {
                method: "DELETE"
            })
        })
    }


    render() {
        return (
            <div className="main-container">
                <NavBar backToProjects={this.backToProjects} createNewProject={this.createNewProject} searchText={this.state.search} hideViewProjectButton={this.state.projectSelected} searchChange={this.searchChange} projectTypeFilter={this.projectTypeFilter} renderEdits={this.renderEdits} editProject={this.state.editProject} logout={this.props.logout}/>
                <CSSTransition in={true} appear={true} timeout={3000} classNames="fade">
                    {this.state.projectSelected ? <TaskContainer addTask={this.addTask} deleteTask={this.deleteTask} showEditForm={this.showEditForm} projectsTasks={this.state.projectSelected.tasks} selectedProject={this.state.projectSelected} /> : <ProjectContainer projectList={this.filteredProjects()} viewProject={this.viewProject} deleteProject={this.deleteProject}/>}
                </CSSTransition>
            </div>
        )
    }
}
