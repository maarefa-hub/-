const settingsStore = {
  language: 'ar',
  theme: 'light',
  setLanguage(lang) {
    this.language = lang
  },
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light'
  }
}

export default settingsStore
