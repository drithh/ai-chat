import { HfInference } from '@huggingface/inference';
import { HuggingFaceStream, StreamingTextResponse } from 'ai';
import { experimental_buildOpenAssistantPrompt } from 'ai/prompts';
import { OpenAIStream } from 'ai';
import OpenAI from 'openai';
import { Readable } from 'stream';
// Create a new HuggingFace Inference instance
const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// IMPORTANT! Set the runtime to edge
// export const runtime = 'edge';

const functions = [
  {
    name: 'get_detail_adriel_project',
    description: 'Get the details of the project that Adriel was working on',
    parameters: {
      type: 'object',
      properties: {
        project_name: {
          type: 'string',
          description: 'The name of the project',
        },
      },
      required: ['project_name'],
    },
  },
  {
    name: 'get_adriel_detail_experience_and_education',
    description: 'Get the details of the experiences and education of Adriel',
    parameters: {
      type: 'object',
      properties: {
        experience_or_education_type: {
          type: 'string',
          enum: [
            'Internship_SebelasMaret_UNS',
            'Freelance_Pingfest',
            'Education_SebelasMaret_UNS',
          ],
          description: 'The type of experience or education',
        },
      },
      required: [
        'experience_or_education_name',
        'experience_or_education_type',
      ],
    },
  },
  {
    name: 'get_adriel_list_projects',
    description: 'Get the list projects that Adriel was working on',
  },
  {
    name: 'get_adriel_experiences_and_education',
    description: 'Get the list of experiences and education of Adriel',
  },
  {
    name: 'get_adriel_profile',
    description: 'Get the profile of Adriel',
  },
  {
    name: 'get_adriel_tech_stack',
    description: 'Get the tech stack that Adriel was working on',
  },
];

export async function POST(req: Request) {
  const { messages } = await req.json();
  const openai = new OpenAI({
    apiKey: 'EMPTY',
    baseURL: 'http://luigi.millennium.berkeley.edu:8000/v1',
  });

  console.log(messages);

  const result = await openai.chat.completions.create({
    model: 'gorilla-openfunctions-v2',
    stream: false,
    messages: messages.map((message: { content: string; role: string }) => ({
      content: message.content,
      role: message.role,
    })),
    functions: functions,
  });
  let response = result.choices[0].message.content;
  const functionCall = result.choices[0].message.function_call;
  if (!functionCall)
    return new Response("I'm sorry, but I can't assist with that.");
  switch (functionCall?.name) {
    case 'get_adriel_profile':
      response = 'Adriel is a software engineer';
      break;

    default:
      break;
  }
  console.log('result', result.choices[0].message);

  return new Response(response);
}
