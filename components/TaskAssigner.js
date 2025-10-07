import React from 'react'

export default function TaskAssigner() {
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Assign Tasks</h2>
      <select className="border p-2 mb-2 w-full">
        <option>Assign Task</option>
        <option>Khalid</option>
        <option>Team</option>
      </select>
      <select className="border p-2 mb-2 w-full">
        <option>Due Date</option>
        <option>Today</option>
        <option>Tomorrow</option>
        <option>Next Week</option>
      </select>
      <button className="bg-yellow-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  )
}
