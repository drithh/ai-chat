import Image from 'next/image';

interface Project {
  name: string;
  command: string;
}

interface ProjectsProps {
  appendMessage: (content: string) => void;
}

export default function Projects({ appendMessage }: ProjectsProps) {
  const projects: Project[] = [
    {
      name: 'e-commerce-website',
      command: 'Give me detail project e-commerce-website',
    },
    {
      name: 'car-rental',
      command: 'Give me detail project car-rental',
    },
    {
      name: 'turing-machine',
      command: 'Give me detail project turing-machine',
    },
    {
      name: 'invoice-website',
      command: 'Give me detail project invoice-website',
    },
  ];

  const convertProjectName = (projectName: string) => {
    const words = projectName.split('-');
    return words
      .map((word) => {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
      })
      .join(' ');
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {projects.map((project: Project) => (
        <div
          onClick={() => {
            appendMessage(project.command);
          }}
          key={project.name}
          className="w-60 transition duration-300 ease-in-out hover:z-0 hover:scale-[1.025] hover:underline cursor-pointer"
        >
          <Image
            src={`/${project.name}.webp`}
            width={150}
            height={80}
            alt={project.name}
            className="w-full rounded-2xl"
          />
          <p className="title font-title text-lg font-bold  text-center">
            {convertProjectName(project.name)}
          </p>
        </div>
      ))}
    </div>
  );
}
