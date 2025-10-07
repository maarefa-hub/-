import React from 'react'
import SectionTitle from '../components/SectionTitle'
import IdeaGenerator from '../components/IdeaGenerator'
import ProjectCard from '../components/ProjectCard'

export default function HomePage() {
  return (
    <div className="p-6">
      <SectionTitle title="مرحبًا بك في المنصة" />
      <IdeaGenerator />
      <div className="mt-6">
        <ProjectCard title="مشروع تجريبي" description="هذا مثال لمشروع تم إنشاؤه تلقائيًا." />
      </div>
    </div>
  )
}
