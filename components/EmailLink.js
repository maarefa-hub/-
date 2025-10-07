import React from 'react'

export default function EmailLink({ email }) {
  return (
    <a href={`mailto:${email}`} className="text-blue-600 underline">
      {email}
    </a>
  )
}
