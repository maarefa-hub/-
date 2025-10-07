import React from 'react'

export default function CodeBlock({ code }) {
  return (
    <pre className="bg-gray-900 text-green-300 p-4 rounded overflow-x-auto text-sm">
      <code>{code}</code>
    </pre>
  )
}
