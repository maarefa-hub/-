import React from 'react'

export default function VerificationCode() {
  return (
    <div className="p-4 bg-beige-100 rounded shadow text-center">
      <h2 className="text-lg font-bold mb-2">Verification Code</h2>
      <div className="text-3xl font-bold mb-4">2518</div>
      <button className="bg-gray-300 px-4 py-2 rounded mr-2">Resend</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Log In</button>
    </div>
  )
}
