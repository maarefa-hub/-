import { useState } from 'react'

export function useFeatureStore(initialFeatures) {
  const [features, setFeatures] = useState(initialFeatures)

  const toggle = (name) => {
    setFeatures((prev) =>
      prev.map((f) =>
        f.name === name ? { ...f, enabled: !f.enabled } : f
      )
    )
  }

  return { features, toggle }
}
