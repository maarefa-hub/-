import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChatProvider } from '../components/ChatContext'
import BubbleInput from '../components/BubbleInput'
import PreviewBubble from '../components/PreviewBubble'
import { useUserStore } from '../store/userStore' // تأكد أن هذا الملف موجود

export default function ChatPage() {
  const router = useRouter()
  const { isLoggedIn } = useUserStore()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login') // توجيه إلى صفحة تسجيل الدخول
    }
  }, [isLoggedIn])

  if (!isLoggedIn) return null // لا تعرض شيء أثناء التوجيه

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
