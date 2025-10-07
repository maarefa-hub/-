import React from 'react'

export default function PreviewBubble({ message, sender }) {
  const bubbleStyle = sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'

  return (
    <div className={`p-2 my-1 rounded ${bubbleStyle}`}>
      <p>{message}</p>
    </div>
  )
}
