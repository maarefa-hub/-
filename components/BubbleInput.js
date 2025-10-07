import React, { useState } from 'react'

export default function BubbleInput({ onSend }) {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (text.trim()) {
      onSend(text)
      setText('')
    }
  }

  return (
    <div className="flex items-center space-x-2 mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتب رسالة..."
        className="flex-grow border p-2 rounded"
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        إرسال
      </button>
    </div>
  )
}
