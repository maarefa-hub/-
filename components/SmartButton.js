import React from 'react'

export default function SmartButton({ label, onClick, color = 'blue' }) {
  const base = 'px-4 py-2 rounded text-white font-semibold'
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    gray: 'bg-gray-500'
  }

  return (
    <button onClick={onClick} className={`${base} ${colors[color]}`}>
      {label}
    </button>
  )
}
