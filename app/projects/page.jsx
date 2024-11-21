import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  const projects = [
    { 
      id: 1, 
      title: 'User-Centered Design Case Study', 
      description: "Analyzed user needs and developed wireframes and prototypes for a travel booking app", 
      imageUrl: '/images/ux-case-study.png', 
      link: "https://github.com/ekeminiakpan/ux-case-study" 
    },
    { 
      id: 2, 
      title: 'Redesign of E-Commerce Website', 
      description: 'Improved the UX of an e-commerce platform by simplifying navigation and enhancing accessibility', 
      imageUrl: '/images/ecommerce-redesign.png', 
      link: "https://github.com/ekeminiakpan/ecommerce-redesign" 
    },
    { 
      id: 3, 
      title: 'Interactive Dashboard', 
      description: 'Created a responsive dashboard with interactive elements for data visualization using Figma', 
      imageUrl: '/images/dashboard-project.png', 
      link: "https://github.com/ekeminiakpan/interactive-dashboard" 
    },
  ]

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
