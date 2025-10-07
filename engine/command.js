const parseCommand = (input) => {
  const normalized = input.trim().toLowerCase()
  if (normalized.includes('نشر')) return 'publish'
  if (normalized.includes('ميزة')) return 'feature'
  if (normalized.includes('مساعدة')) return 'help'
  return 'unknown'
}

export default parseCommand
