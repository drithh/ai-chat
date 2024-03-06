import OpenAI from 'openai';
import { useChat } from 'ai/react';
import { Message } from 'ai';

interface MessageProps {
  append: (message: Message) => void;
  stringMessage: string;
}

export default function Message({ append, stringMessage }: MessageProps) {
  // const { append, setInput, setMessages, messages, handleSubmit } = useChat();

  // parse to json
  if (!stringMessage.includes('role')) {
    return <div>{stringMessage}</div>;
  }

  const message = JSON.parse(
    stringMessage
  ) as OpenAI.Chat.Completions.ChatCompletionMessage;

  // replace _ with space
  message.content = message?.content?.replace(/_/g, ' ') || '';

  const appendMessage = (content: string) => {
    const newMessage = {
      role: 'user',
      content: content,
    } as Message;
    append(newMessage);
  };

  switch (message.function_call?.name) {
    case 'get_adriel_list_projects':
      return (
        <div>
          <h1>Get the list projects that Adriel was working on</h1>
        </div>
      );
      break;
    case 'get_adriel_experiences_and_education':
      return (
        <div>
          <h1>Get the list of experiences and education of Adriel</h1>
        </div>
      );
      break;

    case 'get_adriel_contact':
      return (
        <div>
          <h1>Get the contact of Adriel</h1>
        </div>
      );
      break;

    case 'get_adriel_tech_stack':
      return (
        <div>
          <h1>Get the tech stack that Adriel was working on</h1>
        </div>
      );
      break;
    case 'help':
      return (
        <div className="">
          Here is some commands you can use:
          <ul className="list-disc px-4">
            <li
              onClick={() => {
                appendMessage(
                  'What is the list projects that Adriel was working on'
                );
              }}
            >
              <p className="text-blue-500 hover:underline cursor-pointer">
                Get the list projects that Adriel was working on
              </p>
            </li>

            <li
              onClick={() => {
                appendMessage(
                  'What is the list of experiences and education of Adriel'
                );
              }}
            >
              <p className="text-blue-500 hover:underline cursor-pointer">
                Get the list of experiences and education of Adriel
              </p>
            </li>
            <li
              onClick={() => {
                appendMessage('What is the contact of Adriel');
              }}
            >
              <p className="text-blue-500 hover:underline cursor-pointer">
                Get the contact of Adriel
              </p>
            </li>
            <li
              onClick={() => {
                appendMessage(
                  'What is the tech stack that Adriel was working on'
                );
              }}
            >
              <p className="text-blue-500 hover:underline cursor-pointer">
                Get the tech stack that Adriel was working on
              </p>
            </li>
          </ul>
        </div>
      );
      break;
    default:
      return (
        <div>
          <div className="whitespace-pre-wrap">{message.content}</div>
        </div>
      );
  }

  return <div>{stringMessage}</div>;
}
