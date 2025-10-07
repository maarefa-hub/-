import React from 'react'

export default function ProjectPreview({ project }) {
  if (!project) return null

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-2">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        معاينة المشروع
      </a>
    </div>
  )
}
