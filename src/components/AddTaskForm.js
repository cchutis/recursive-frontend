import React, { Component } from 'react'
import DifficultySlider from './DifficultySlider'

export default class AddTaskForm extends Component {

    state = {
        title: "",
        description: "",
        difficulty: "",
        completed: false,
        due_date: "",
        project_id: this.props.selectedProject.id
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createPost()
    }

    createPost = () => {
        fetch('http://localhost:4000/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                difficulty: this.state.difficulty,
                completed: this.state.completed,
                due_date: this.state.due_date,
                project_id: this.state.project_id
            })
        })
        .then(r => r.json())
        .then(newTask => {
            debugger
            this.props.addTask(newTask, newTask.project_id)
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="project-create-input" name="title" value={this.state.title} placeholder="Title" onChange={this.handleChange} />
                <input type="text" className="project-create-input" name="description" value={this.state.description} placeholder="Description" onChange={this.handleChange} />
                <input type="text" className="project-create-input" name="difficulty" value={this.state.difficulty} placeholder="Difficulty" onChange={this.handleChange} />
                <input type="date" className="project-create-input-date" name="due_date" value={this.state.due_date} onChange={this.handleChange} />
                <input type="submit" className="project-create-input-btn" value="Create"/>
            </form>
        )
    }
}
