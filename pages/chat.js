import React from 'react'
import { ChatProvider } from '../components/ChatContext'
import BubbleInput from '../components/BubbleInput'
import PreviewBubble from '../components/PreviewBubble'

export default function ChatPage() {
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
