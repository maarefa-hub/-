export function getUserColor(role) {
  const colors = {
    مسؤول: '#FFD700',
    نشط: '#1E90FF',
    مبتدئ: '#A9A9A9',
    مميز: '#32CD32'
  }

  return colors[role] || '#CCCCCC'
}
