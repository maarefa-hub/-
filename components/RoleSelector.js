import React from 'react'

export default function RoleSelector({ value, onChange }) {
  const roles = ['مسؤول', 'نشط', 'مبتدئ', 'مميز']

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded w-full"
    >
      {roles.map((role, index) => (
        <option key={index} value={role}>
          {role}
        </option>
      ))}
    </select>
  )
}
