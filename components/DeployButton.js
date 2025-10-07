import React from 'react'

export default function DeployButton({ onDeploy }) {
  return (
    <button
      onClick={onDeploy}
      className="bg-indigo-600 text-white px-4 py-2 rounded shadow"
    >
      نشر المشروع
    </button>
  )
}
