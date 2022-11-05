import io from 'socket.io-client';
import { useState, useEffect } from 'react';

let socket;

type Message = {
  author: string;
  message: string;
};

export default function Home() {
  const [username, setUsername] = useState('');
  const [chosenUsername, setChosenUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  // Initialize the socket client-side
  const socketInitializer = async () => {
    // Just call the server to initialize it in case it's not initialized
    await fetch('/api/socket');

    socket = io();

    socket.on('newIncomingMessage', (msg) => {
      setMessages((currentMsg) => [...currentMsg, msg]);

      console.log('new messages');
    });
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  const sendMessage = async () => {
    socket.emit('createdMessage', { author: chosenUsername, message });
    setMessages([...messages, { author: chosenUsername, message }]);
    setMessage('');

    console.log('sending message');
  };

  const handleKeypress = (e) => {
    // if user presses enter key
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  return (
    <div>
      <main>
        {!chosenUsername ? (
          <>
            <h3>How people should call you?</h3>
            <input
              type="text"
              placeholder="Identity..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={() => {
                setChosenUsername(username);
              }}
            >
              Go!
            </button>
          </>
        ) : (
          <>
            <p>Your username: {username}</p>
            <div>
              <div>
                {messages.map((msg, i) => {
                  return (
                    <div key={i}>
                      {msg.author} : {msg.message}
                    </div>
                  );
                })}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="New message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={handleKeypress}
                />
                <div>
                  <button
                    onClick={() => {
                      sendMessage();
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
