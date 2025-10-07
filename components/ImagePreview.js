import React from 'react'

export default function ImagePreview({ src, alt }) {
  return (
    <div className="my-4 text-center">
      <img src={src} alt={alt || "Preview"} className="max-w-full h-auto rounded shadow" />
    </div>
  )
}
