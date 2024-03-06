'use client';

import { useChat } from 'ai/react';
import { Input } from './components/ui/input';
import Message from './components/message';
import { useRef, useEffect } from 'react';
import { stringify } from 'querystring';

export default function Chat() {
  const {
    messages,
    setMessages,
    append,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when component mounts
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (messages.length === 0) {
    const content = {
      role: 'system',
      function_call: {
        name: 'help',
      },
    };

    setMessages([
      {
        id: '1',
        role: 'system',
        content: JSON.stringify(content),
      },
    ]);
  }
  return (
    <div className="relative h-screen  max-w-xl mx-auto py-12 ">
      <div
        className="max-h-[85vh] overflow-y-auto overflow-x-hidden"
        ref={chatContainerRef}
      >
        <div className="flex flex-col w-full  ">
          {messages.map((m) => (
            <div key={m.id} className="flex gap-1 min-h-8 py-2 ">
              <div className="min-w-12 text-center">
                {m.role === 'user' ? 'User' : m.role === 'system' ? '' : 'AI'}
              </div>
              <div className="border-l-2 pl-4">
                <Message append={append} stringMessage={m.content} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} id="chat-form">
        <Input
          className="absolute bottom-0 mb-8  w-full"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
