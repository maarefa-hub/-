import React, { createContext, useContext, useState } from 'react'

const ChatContext = createContext()

export const useChat = () => useContext(ChatContext)

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([])

  const sendMessage = (text) => {
    const newMessage = { text, sender: 'user', timestamp: Date.now() }
    setMessages((prev) => [...prev, newMessage])
  }

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  )
}
