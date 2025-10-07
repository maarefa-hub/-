import React from 'react'

export default function FeatureList({ features }) {
  return (
    <ul className="list-disc pl-4 text-gray-800">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  )
}
