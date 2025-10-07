import React from 'react'
import projectData from './projectData.js'
import ProjectCard from './projectCard.js'

const ProjectList = () => {
  return (
    <div className="list">
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          status={project.status}
        />
      ))}
    </div>
  )
}

export default ProjectList
