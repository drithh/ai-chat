interface ProjectProps {
  projectName: string;
  appendMessage: (content: string) => void;
}

interface Project {
  name: string;
  description: string;
  techStack: string[];
}

export default function Project({ projectName, appendMessage }: ProjectProps) {
  const convertProjectName = (projectName: string) => {
    const words = projectName.split('-');
    return words
      .map((word) => {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
      })
      .join(' ');
  };

  const projects: Project[] = [
    {
      name: 'e-commerce-website',
      description: 'Online Fashion Commerce Website',
      techStack: ['fastapi', 'postgresql', 'python', 'react', 'typescript'],
    },
    {
      name: 'car-rental',
      description: 'Online Car Rental and Booking System',
      techStack: ['laravel', 'mysql', 'php', 'tailwindcss', 'vue'],
    },
    {
      name: 'turing-machine',
      description: 'Web-based Turing machine simulator',
      techStack: ['react', 'tailwindcss', 'typescript'],
    },
    {
      name: 'invoice-website',
      description: 'Online invoice management and inventory tracking app',
      techStack: ['laravel', 'mysql', 'php', 'tailwindcss'],
    },
  ];

  const currentProject = projects.find(
    (project) => project.name === projectName
  ) as Project;

  return (
    <div className=" ">
      <p className="title font-title text-lg font-bold  ">
        {convertProjectName(currentProject.name)}
      </p>
      <p className="text-left">{currentProject.description}</p>
      <p className="text-left">Tech Used:</p>
      <div className="inline-flex gap-2">
        {currentProject.techStack.map((tech) => (
          <div
            key={tech}
            className="tech rounded-full border border-solid border-dark-background py-1 px-3 text-sm  dark:border-light-background"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
