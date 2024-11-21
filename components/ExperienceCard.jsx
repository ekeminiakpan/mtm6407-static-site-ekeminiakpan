export default function ExperienceCard({ company, position, period, description }) {
    return (
      <div className="experience-card">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="period">{period}</p>
        <p>{description}</p>
      </div>
    )
  }