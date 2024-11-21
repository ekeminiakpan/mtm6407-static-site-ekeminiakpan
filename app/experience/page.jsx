import ExperienceCard from '../../components/ExperienceCard'

export default function Experience() {
  const experiences = [
    { id: 1, company: 'Algonquin College', position: 'Student', period: 'May 2022 - Present', description: 'Studied UX/UI design' },
    { id: 2, company: 'Figma', position: 'UX Designer Intern', period: 'Jan 2024 - June 2024', description: 'Collaborated on design systems and prototyping to improve user workflows' },
    { id: 3, company: 'Adobe', position: 'Junior UX Designer', period: 'June 2024 - Present', description: 'Contributed to enhancing the usability of creative software tools' },
  ]

  return (
    <div className="experience">
      <h1>My Experience</h1>
      <div className="timeline">
        {experiences.map(experience => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  )
}
