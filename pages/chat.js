import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChatProvider } from '../components/ChatContext'
import BubbleInput from '../components/BubbleInput'
import PreviewBubble from '../components/PreviewBubble'
import userStore from '../store/userStore'

export default function ChatPage() {
  const router = useRouter()

  useEffect(() => {
    if (!userStore.isLoggedIn) {
      router.push('/login')
    }
  }, [])

  if (!userStore.isLoggedIn) return null

  return (
    <ChatProvider>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">الدردشة الذكية</h2>
        <PreviewBubble sender="ai" message="كيف يمكنني مساعدتك اليوم؟" />
        <BubbleInput onSend={(msg) => console.log("User sent:", msg)} />
      </div>
    </ChatProvider>
  )
}
