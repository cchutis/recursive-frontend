import React, { Component } from 'react'


export default class TaskCard extends Component {

    constructor(props) {
        super()
        this.close = React.createRef()
    }

    showX = () => {
        this.close.current.style.display = "block"
    }

    hideX = () => {
        this.close.current.style.display = "none"
    }

    render() {
        const {title, description, difficulty, completed, due_date, id, project_id} = this.props.task
        return (
            <div className="task-card" onMouseEnter={this.showX} onMouseLeave={this.hideX}>
                <div ref={this.close} className="close-btn" onClick={() => this.props.deleteTask(id, project_id)}>X</div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Difficulty: {difficulty}</p>
                <p>Due: {due_date}</p>
            </div>
        )
    }
}
