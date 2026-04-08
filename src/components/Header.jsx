import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa'
import profile from '../data/profile'
import '../styles/header.css'

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
}

export default function Header() {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="header-name">{profile.name}</h1>
      </Link>
      <span className="header-title">{profile.title}</span>
      <nav>
        <ul className="header-links">
          {Object.entries(profile.social).map(([key, { url, label }]) => {
            const Icon = iconMap[key]
            return (
              <li key={key}>
                <a
                  className="link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  aria-label={`${profile.name}'s ${label} account`}
                >
                  {Icon && <Icon />}
                  <span>{label}</span>
                </a>
              </li>
            )
          })}
          <li>
            <a
              className="link resume"
              href={`${import.meta.env.BASE_URL}${profile.resumeFile.replace(/^\//, '')}`}
              download={`${profile.name.replace(/\s+/g, '_')}_Resume.pdf`}
              title="Resume"
              aria-label={`${profile.name}'s resume`}
            >
              <FaFileDownload />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
