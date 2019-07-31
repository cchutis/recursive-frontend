import React, { Component } from 'react'
import TaskCard from '../components/TaskCard'
import AddTaskForm from '../components/AddTaskForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

export default class TaskContainer extends Component {

    state ={
        formOpen: false
    }

    showTaskForm = () => {
        this.setState({
            formOpen: true
        })
    }

    hideTaskForm = () => {
        this.setState({
            formOpen: false
        })
    }

    displayTasks = () => {
        return this.props.projectsTasks.map(task => {
            return <TaskCard key={task.id} task={task} deleteTask={this.props.deleteTask}/>
        })
    }

    render() {
        
        const {name, language, due_date} = this.props.selectedProject

        return (
            <div className="task-container">
                <div className="project-info-tc">
                    <h1 style={{display: "inline"}}>{name}</h1><FontAwesomeIcon icon={faEdit} className="edit-btn" onClick={() => this.props.showEditForm(this.props.selectedProject)} />
                    <h2><span style={{color:"darkmagenta"}}>{language}</span> // Deadline: {due_date}</h2>
                </div>
                {this.state.formOpen ? 
                <div>
                    <FontAwesomeIcon icon={faMinusCircle} className="add-task-btn" onClick={this.hideTaskForm} />
                    <AddTaskForm selectedProject={this.props.selectedProject} addTask={this.props.addTask}/>
                </div>
                : 
                <FontAwesomeIcon icon={faPlusCircle} className="add-task-btn" onClick={this.showTaskForm}/>
                }
                {this.displayTasks()}
            </div>
        )
    }
}
