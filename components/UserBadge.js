import React from 'react'

export default function UserBadge({ role }) {
  const colors = {
    مسؤول: 'bg-yellow-500',
    نشط: 'bg-blue-500',
    مبتدئ: 'bg-gray-400',
    مميز: 'bg-green-500'
  }

  return (
    <span className={`text-white px-2 py-1 rounded ${colors[role] || 'bg-gray-300'}`}>
      {role}
    </span>
  )
}
