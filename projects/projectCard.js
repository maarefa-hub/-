import React from 'react'

const ProjectCard = ({ title, description, status }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="status">{status}</span>
    </div>
  )
}

export default ProjectCard
