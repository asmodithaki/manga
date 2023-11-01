import React, { useState } from 'react';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    setChatHistory([...chatHistory, { type: 'user', message }]);
    // Here, normally, you would call an API to get a response from the assistant.
    setMessage('');
  };

  return (
    <div className="chat-window">
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.type}`}>
            {chat.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
