import { useParams, Navigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { useAnimatedNavigate } from '../context/NavigationContext'
import projects from '../data/projects'
import '../styles/portfolio.css'

export default function PortfolioDetail() {
  const { id } = useParams()
  const animatedNavigate = useAnimatedNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const handleBack = (e) => {
    e.preventDefault()
    animatedNavigate('/', 'backward')
  }

  return (
    <div className="content portfolio-detail">
      {/* Back link */}
      <div className="portfolio-header">
        <a href="#/" className="portfolio-close" onClick={handleBack}>
          <FaArrowLeft />
          <small>Back</small>
        </a>
      </div>

      {/* Banner area */}
      <div className="portfolio-top">
        <div
          className="portfolio-banner"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#555',
            fontSize: '1.125rem',
          }}
        >
          Project Banner / Video
        </div>
        <h2>{project.title}</h2>
      </div>

      {/* About & Project Info side by side */}
      <div className="about-and-info">
        <div className="part">
          <h3 className="part-header">About</h3>
          {project.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="part">
          <h3 className="part-header">Project Info</h3>
          <div className="project-info">
            <p>
              <strong>Role:</strong> {project.role}
            </p>
            <p>
              <strong>Engine / Stack:</strong> {project.engine}
            </p>
          </div>
        </div>
      </div>

      {/* Detail Sections */}
      {project.sections.map((section, i) => (
        <div className="part" key={i}>
          <h3 className="part-header">{section.title}</h3>
          {section.content.map((paragraph, j) => (
            <p key={j}>{paragraph}</p>
          ))}
        </div>
      ))}
    </div>
  )
}
