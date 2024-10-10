
'use client'
import React, { useState } from 'react';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

export default function WhatsappChat() {
  const [messages, setMessages] = useState([
    { text: "Hey", time: "5:09 PM", sender: "them" },
    { text: "At what time are we going to the movies?", time: "5:10 PM", sender: "them" },
    { text: "8PM I think ...", time: "5:34 PM", sender: "me" },
  ]);

  const [newMessage, setNewMessage] = useState('');

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { text: newMessage, time: currentTime, sender: 'me' }]);
    setNewMessage(''); // Clear input field after sending
  };

  return (
    <>
      {/* WhatsApp Icon (could be used as a chat button) */}
      <FaWhatsapp className="cursor-pointer mb-4" fontSize={30} />

      {/* Chat Header */}
      <div className="bg-[#075E54] text-white p-3 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <FaWhatsapp className="mr-2" fontSize={20} />
          <span>Rendy Del Rosario</span>
        </div>
        <span className="text-sm">Online</span>
      </div>

      {/* Chat Container */}
      <div className="bg-[#e5ddd5] p-5 w-full max-w-md h-[500px]  overflow-y-auto flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-xl max-w-[75%] ${
              msg.sender === 'me' ? 'bg-[#dcf8c6] self-end' : 'bg-white self-start'
            }`}
          >
            <div className="text-sm mb-1">{msg.text}</div>
            <div className="text-xs text-gray-500 text-right">{msg.time}</div>
          </div>
        ))}
      </div>

      {/* Chat Footer (Message Input and Send Button) */}
      <div className="bg-white p-3 rounded-b-lg flex items-center space-x-2">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          className="bg-[#075E54] text-white p-2 rounded-full hover:bg-[#064E48] transition duration-300"
          onClick={handleSendMessage}
        >
          <FaPaperPlane fontSize={20} />
        </button>
      </div>
    </>
  );
}
