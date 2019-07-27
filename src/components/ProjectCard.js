import React from 'react'
// import Moment from 'moment'

export default function ProjectCard (props) {

    const {name, card_photo, language, due_date, id} = props.project

    return (
        <div className="project-card">
            <img src={`http://localhost:4000/${card_photo}`} alt=""/>
            <h2>{name}</h2>
            <h3>{language}</h3>
            <p>Deadline: {due_date}</p>
            <button onClick={() => props.viewProject(id)}>View Project</button>
        </div>
    )
}
