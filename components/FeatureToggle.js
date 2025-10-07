import React from 'react'

export default function FeatureToggle({ feature, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <span>{feature}</span>
      <button
        onClick={() => onToggle(feature)}
        className={`px-3 py-1 rounded ${enabled ? 'bg-green-500' : 'bg-gray-400'} text-white`}
      >
        {enabled ? 'مفعل' : 'معطل'}
      </button>
    </div>
  )
}
