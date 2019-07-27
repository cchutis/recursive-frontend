import React, { Component } from 'react'


export default class TaskCard extends Component {
    render() {
        const {title, description, difficulty, completed, due_date} = this.props.task
        return (
            <div className="task-card">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Difficulty: {difficulty}</p>
                <p>Due: {due_date}</p>
            </div>
        )
    }
}
