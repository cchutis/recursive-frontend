import React, { Component } from 'react'

export default class EditProjectForm extends Component {

    state = {
        name: this.props.editProject.name,
        language: this.props.editProject.language,
        due_date: this.props.editProject.due_date,
        photo: this.props.editProject.photo
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //passthis up
        this.props.renderEdits(this.state)
        this.postEditedInfo()
    }

    postEditedInfo = () => {
        fetch(`http://localhost:4000/projects/${this.props.editProject.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                language: this.state.language,
                due_date: this.state.due_date,
                photo: this.state.photo,
                user_id: 1
            })
        })
            .then(r => r.json())
            .then(edited => {
                console.log(edited)
            })
        // this.setState({
        //     name: "",
        //     language: "",
        //     due_date: "",
        //     photo: ""
        // })
    }


    render() {
        return (
            <div className="new-project-container">
                <div className="new-project-form">
                    <p className="form-title">Edit Project Details</p>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="text" name="name" placeholder="Project Name" value={this.state.name} onChange={this.handleChange} className="project-create-input" />
                        <input type="text" name="language" placeholder="Language or Skill" value={this.state.language} onChange={this.handleChange} className="project-create-input" />
                        <input type="date" name="due_date" placeholder="Deadline" value={this.state.due_date} onChange={this.handleChange} className="project-create-input-date" />
                        <input type="text" name="photo" placeholder="Image URL" value={this.state.photo} onChange={this.handleChange} className="project-create-input" />
                        <input type="submit" value="Update" className="project-create-input-btn" />
                    </form>
                </div>
            </div>
        )
    }
}
