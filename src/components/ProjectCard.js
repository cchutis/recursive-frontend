import React from 'react'
// import Moment from 'moment'


export default class ProjectCard extends React.Component {
    
    constructor(props) {
        super()
        this.close = React.createRef()
    }
    
    handleClick = (e, id) => {
        e.stopPropagation()
        this.props.deleteProject(id)
    }
    
    showX = () => {
        this.close.current.style.display = "block"    
    }

    hideX = () => {
        this.close.current.style.display = "none" 
    }
    
    render () {
        const {name, photo, language, due_date, id} = this.props.project
        return (
            <div className="project-card" onClick={() => this.props.viewProject(name, due_date)} onMouseEnter={this.showX} onMouseLeave={this.hideX}>
                <div ref={this.close} className="close-btn" onClick={(e) => this.handleClick(e, id)}>X</div>
                <div className="project-image-container">
                    <img src={photo} alt={name} className="project-card-img"/>
                </div>
                <div className="project-card-details">
                    <h2 className="project-title">{name}</h2>
                    <h3 className="project-language">{language}</h3>
                    <p className="project-due-date">Deadline: {due_date}</p>
                </div>
            </div>
        )
    }
}
