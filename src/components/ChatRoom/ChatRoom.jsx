import React, { useState, useEffect } from "react";
import "./ChatRoom.css";
import { useUser } from "../../data/UserContext";
import { io } from "socket.io-client";

function ChatRoom() {
  const { username } = useUser();
  const [message, setMessage] = useState(""); // for storing message input
  const [messages, setMessages] = useState([]); // to store all messages
  const socket = io("http://141.148.212.69:9000"); // Socket.IO connection

  useEffect(() => {
    // Listening for incoming messages
    socket.on("receiveMessage", (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });

    // Send the username when the user joins
    socket.emit("join", username);

    // Clean up the socket connection when component unmounts
    return () => {
      socket.disconnect();
    };
  }, [username, socket]);

  const handleSendMessage = () => {
    if (message.trim() === "") return; // Avoid sending empty messages
    const messageData = {
      username,
      message,
      timestamp: new Date().toLocaleTimeString(),
    };

    // Emit the message to the server
    socket.emit("sendMessage", messageData);

    // Update the messages state (for immediate UI update)
    setMessages((prevMessages) => [...prevMessages, messageData]);

    // Clear the input field after sending
    setMessage("");
  };

  return (
    <div>
      <div className="website">
        <div className="leftPanel">
          <h1>{username}</h1>
          <p id="para">Enter your message here!</p>
          <div className="sendMessage">
            <input
              id="inp"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button id="button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
        <div className="rightPanel" id="message">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <strong>{msg.username}</strong>: {msg.message}{" "}
              <span>{msg.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
