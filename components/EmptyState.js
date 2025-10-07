import React from 'react'

export default function EmptyState({ label }) {
  return (
    <div className="text-center text-gray-500 py-8">
      <p>{label || "لا توجد بيانات لعرضها"}</p>
    </div>
  )
}
