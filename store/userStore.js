const userStore = {
  user: null,
  setUser(data) {
    this.user = data
  },
  clearUser() {
    this.user = null
  }
}

export default userStore
