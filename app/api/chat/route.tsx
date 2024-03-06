import OpenAI from 'openai';
// export const runtime = 'edge';

const functions = [
  {
    name: 'detail_project',
    description: 'the details of the project that Adriel  was working on',
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
    name: 'detail_experience_and_education',
    description: 'the details of the experiences and education of Adriel',
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
    name: 'list_projects',
    description: 'the list projects that Adriel was working on',
  },
  {
    name: 'experiences_and_education',
    description: 'the list of experiences and education of Adriel',
  },
  {
    name: 'contact',
    description: 'the contact of Adriel',
  },
  {
    name: 'tech_stack',
    description: 'the tech stack that Adriel was working on',
  },
  {
    name: 'help',
    description: 'help',
  },
];

export async function POST(req: Request) {
  const { messages } = await req.json();
  const openai = new OpenAI({
    apiKey: 'EMPTY',
    baseURL: 'http://luigi.millennium.berkeley.edu:8000/v1',
  });

  console.log(messages);

  const lastMessage = messages[messages.length - 1];

  const result = await openai.chat.completions.create({
    model: 'gorilla-openfunctions-v2',
    stream: false,
    messages: [
      {
        content: lastMessage.content,
        role: lastMessage.role,
      },
    ],
    functions: functions,
  });
  const response = result.choices[0].message;
  // console.log(response);
  // const functionCall = response.function_call;
  // if (!functionCall) {
  //   return new Response(
  //     JSON.stringify({
  //       content: "I'm sorry, but I can't assist with that.",
  //       role: response.role,
  //     })
  //   );
  // }

  return new Response(JSON.stringify(response));
}
