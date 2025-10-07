import React, { useState } from 'react'

export default function AdminControl() {
  const [command, setCommand] = useState('')
  const [response, setResponse] = useState('')

  const handleExecute = () => {
    if (command) {
      setResponse(`✅ تم تنفيذ الأمر: ${command}`)
    }
  }

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Admin Control</h2>
      <input
        type="text"
        placeholder="أدخل أمرًا بشريًا"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleExecute}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        تنفيذ
      </button>
      {response && <p className="mt-4 text-green-600">{response}</p>}
    </div>
  )
}
