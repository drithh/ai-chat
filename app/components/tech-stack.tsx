import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiPython,
  SiFastapi,
  SiGo,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiReact,
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { RiVuejsLine } from 'react-icons/ri';
import { DiGoogleCloudPlatform } from 'react-icons/di';
export default function TechStack() {
  const tech = [
    {
      name: 'HTML5',
      icon: <SiHtml5 />,
    },
    {
      name: 'CSS3',
      icon: <SiCss3 />,
    },
    {
      name: 'TailwindCSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'Javascript (ES6+)',
      icon: <SiJavascript />,
    },
    {
      name: 'Typescript',
      icon: <SiTypescript />,
    },
    {
      name: 'NodeJS',
      icon: <IoLogoNodejs />,
    },
    {
      name: 'React',
      icon: <SiReact />,
    },
    {
      name: 'Vue',
      icon: <RiVuejsLine />,
    },
    {
      name: 'PHP',
      icon: <SiPhp />,
    },
    {
      name: 'Laravel',
      icon: <SiLaravel />,
    },
    {
      name: 'Python',
      icon: <SiPython />,
    },
    {
      name: 'FastAPI',
      icon: <SiFastapi />,
    },
    {
      name: 'GoLang',
      icon: <SiGo />,
    },
    {
      name: 'Git',
      icon: <SiGit />,
    },
    {
      name: 'Mysql',
      icon: <SiMysql />,
    },
    {
      name: 'Postgresql',
      icon: <SiPostgresql />,
    },
    {
      name: 'Docker',
      icon: <SiDocker />,
    },
    {
      name: 'Google Cloud Platform',
      icon: <DiGoogleCloudPlatform />,
    },
  ];
  return (
    <div>
      <p className="title font-title ">
        Here are few technologies that are cup of my{' '}
        <span className="line-through">coffee</span> tea
      </p>
      <div className="mt-5 grid max-w-[48rem] grid-cols-2 gap-y-4 text-[1.3rem] text-light-transparent dark:text-dark-transparent md:grid-cols-3">
        {tech.map((tech, index) => {
          return (
            <div key={index} className="tech flex items-center gap-x-3">
              <div className="tech-icon ">{tech.icon}</div>
              <span className="tech-name font-title text-sm font-light">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
