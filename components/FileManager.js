import React, { useState } from 'react'

export default function FileManager() {
  const [files, setFiles] = useState([])

  const handleUpload = (e) => {
    const uploaded = Array.from(e.target.files)
    setFiles((prev) => [...prev, ...uploaded])
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">File Manager</h2>
      <input type="file" multiple onChange={handleUpload} className="mb-2" />
      <ul className="list-disc pl-4">
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  )
}
