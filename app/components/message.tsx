import OpenAI from 'openai';
import { useChat } from 'ai/react';
import { Message } from 'ai';
import Projects from './projects';
import Project from './project';
import TechStack from './tech-stack';
import Contact from './contact';
import Experiences from './experiences';
import Experience from './experience';

interface MessageProps {
  append: (message: Message) => void;
  stringMessage: string;
}

export default function Message({ append, stringMessage }: MessageProps) {
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
    case 'list_projects':
      return <Projects appendMessage={appendMessage} />;

    case 'detail_project':
      return (
        <Project
          projectName={(message.function_call?.arguments as any).project_name}
        />
      );

    case 'experiences_and_education':
      return <Experiences appendMessage={appendMessage} />;

    case 'detail_experience_and_education':
      return (
        <Experience
          experienceName={
            (message.function_call?.arguments as any).experience_or_education
          }
        />
      );

    case 'contact':
      return <Contact />;

    case 'tech_stack':
      return <TechStack />;

    case 'help':
      return (
        <div className="">
          Here is some commands you can use:
          <ul className="list-disc pl-4">
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
