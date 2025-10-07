import React from 'react'

export default function ProjectCard({ title, description }) {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
