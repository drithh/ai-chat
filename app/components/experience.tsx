interface ExperienceProps {
  experienceName: string;
}

const experiences = [
  {
    name: 'Internship_UniversitasSebelasMaret_UNS',
    display: 'Internship',
    place: 'ERP Universitas Sebelas Maret',
    duration: 'Sep 2022 - Present',
    works: [
      'Developed Backoffice for School ERP Using Laravel',
      'Developed Frontend application for School ERP Using ReactJS',
      'Developed Backend application for School ERP Using Golang',
    ],
  },
  {
    name: 'Freelance_Pingfest',
    display: 'Freelance',
    place: 'Pingfest',
    duration: 'Mar 2021 - Nov 2021',
    works: [
      'Designed Home UI for website and mobile view',
      'Implemented UI design using Raw HTML, CSS, and JS',
      'Improved User Experience by adding some animations',
    ],
  },
  {
    name: 'Education_UniversitasSebelasMaret_UNS',
    display: 'Education',
    place: 'Universitas Sebelas Maret',
    duration: 'July 2020 - Present',
    works: ['Bachelor of Computer Science, Currently in 4rd year'],
  },
];

export default function Experience({ experienceName }: ExperienceProps) {
  const currentExperience = experiences.find(
    (experience) => experience.name === experienceName
  ) as (typeof experiences)[0];

  return (
    <div className=" ">
      <p className="title font-title text-lg font-bold  ">
        {currentExperience.display} at {currentExperience.place}
      </p>
      <p className="text-left">{currentExperience.duration}</p>
      <p className="text-left">Works:</p>
      <div className="text-left">
        <ul className="list-disc list-inside">
          {currentExperience.works.map((work, index) => (
            <li key={index}>{work}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
