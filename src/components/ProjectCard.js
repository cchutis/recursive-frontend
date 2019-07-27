import React from 'react'
import Moment from 'moment'

export default function ProjectCard (props) {

    const {name, language, due_date, id} = props.project


    return (
        <div className="project-card">
            <h2>{name}</h2>
            <h3>{language}</h3>
            <p>Deadline: {Moment().format('due_date, MMMM-DD-YYYY')}</p>
            <button onClick={() => props.viewProject(id)}>View Project</button>
        </div>
    )
}
