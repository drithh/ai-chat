interface ExperiencesProps {
  appendMessage: (content: string) => void;
}

export default function Experiences({ appendMessage }: ExperiencesProps) {
  const experiences = [
    {
      type: 'Internship',
      name: 'ERP Universitas Sebelas Maret',
    },
    {
      type: 'Freelance',
      name: 'Pingfest',
    },
    {
      type: 'Education',
      name: 'Universitas Sebelas Maret',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="desc">A couple of my experiences and education</div>
      <div className="flex gap-4 flex-wrap">
        {experiences.map((experience, index) => (
          <div
            onClick={() => {
              appendMessage(
                `Give me detail experience ${experience.name} ${experience.type}`
              );
            }}
            key={index}
            className="w-full pr-2 transition  hover:underline cursor-pointer"
          >
            <div className="w-full border-y-2 border-gray-200 p-2">
              <div className="text-left font-bold">{experience.type}</div>
              <div className="text-left">{experience.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
