import React, { Component } from 'react'
import TaskCard from '../components/TaskCard'

export default class TaskContainer extends Component {

    displayTasks = () => {
        return this.props.selectedProject.tasks.map(task => {
            return <TaskCard key={task.id} task={task} />
        })
    }
    render() {
        console.log(this.props.selectedProject.tasks)
        return (
            <div className="task-container">
                {this.displayTasks()}
            </div>
        )
    }
}
