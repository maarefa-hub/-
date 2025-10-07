import React, { useState } from 'react'
import { useRouter } from 'next/router'
import userStore from '../store/userStore'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (username.trim()) {
      userStore.setUser({ name: username })
      router.push('/chat')
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">تسجيل الدخول</h2>
      <input
        type="text"
        placeholder="اسم المستخدم"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        دخول
      </button>
    </div>
  )
}
