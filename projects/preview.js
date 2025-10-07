import React from 'react'
import { useRouter } from 'next/router'
import ProjectPreview from '../components/ProjectPreview'
import { useProjectStore } from '../store/projectStore'

export default function PreviewPage() {
  const router = useRouter()
  const { id } = router.query
  const { projects } = useProjectStore()

  const project = projects.find((p) => p.id.toString() === id)

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">معاينة المشروع</h2>
      <ProjectPreview project={project} />
    </div>
  )
}
