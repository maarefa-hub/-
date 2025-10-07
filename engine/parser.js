const extractKeywords = (text) => {
  const words = text.split(/\s+/)
  return words.filter(w => w.length > 2)
}

export default extractKeywords
