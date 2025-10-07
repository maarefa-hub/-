import React, { useState } from 'react'

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('ar')

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }

  return (
    <div className="text-center my-4">
      <button
        onClick={toggleLanguage}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        اللغة الحالية: {lang === 'ar' ? 'العربية' : 'English'}
      </button>
    </div>
  )
}
