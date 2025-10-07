import React from 'react'

const ChatBubble = ({ sender, message }) => {
  return (
    <div className={`chat-bubble ${sender}`}>
      {message}
    </div>
  )
}

export default ChatBubble
