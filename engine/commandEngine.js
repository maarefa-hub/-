export function interpretCommand(input) {
  const normalized = input.trim().toLowerCase()

  if (normalized.includes("نشر")) return "deploy"
  if (normalized.includes("فكرة")) return "generateIdea"
  if (normalized.includes("تحكم")) return "adminControl"
  if (normalized.includes("معاينة")) return "previewProject"
  if (normalized.includes("ملف")) return "openFileManager"
  if (normalized.includes("دردشة")) return "openChat"

  return "unknown"
}
