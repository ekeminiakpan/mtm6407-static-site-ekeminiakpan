export default function ProjectCard({ title, description, imageUrl, link }) {
    return (
      <div className="project-card">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" className="btn">View Project</a>
        </div>
      </div>
    )
  }