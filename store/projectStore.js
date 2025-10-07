import { useState } from 'react'

export function useProjectStore() {
  const [projects, setProjects] = useState([])

  const addProject = (title, description) => {
    const newProject = {
      id: Date.now(),
      title,
      description,
      link: `/preview/${Date.now()}`
    }
    setProjects((prev) => [...prev, newProject])
  }

  return { projects, addProject }
}
