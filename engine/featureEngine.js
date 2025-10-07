export function toggleFeature(features, featureName) {
  return features.map((f) =>
    f.name === featureName ? { ...f, enabled: !f.enabled } : f
  )
}
