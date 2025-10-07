import React, { useState } from 'react'

export default function IdeaGenerator() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [generated, setGenerated] = useState(null)

  const handleGenerate = () => {
    if (title && description) {
      setGenerated(`✅ فكرة جديدة: ${title} – ${description}`)
    }
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Generate Idea</h2>
      <input
        type="text"
        placeholder="This"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate
      </button>
      {generated && <p className="mt-4 text-green-600">{generated}</p>}
    </div>
  )
}
