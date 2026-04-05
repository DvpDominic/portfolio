import { FaArrowRight } from 'react-icons/fa'
import { useAnimatedNavigate } from '../context/NavigationContext'

export default function ProjectCard({ project }) {
  const animatedNavigate = useAnimatedNavigate()

  return (
    <button
      className="job-card"
      onClick={() => animatedNavigate(`/portfolio/${project.id}`, 'forward')}
      type="button"
    >
      <div className={`job-card-video${project.video ? '' : ' video-loaded'}`}>
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={(e) => e.target.parentElement.classList.add('video-loaded')}
            style={{ width: '100%', display: 'block' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              aspectRatio: '16/9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#252525',
              color: '#555',
              fontSize: '0.875rem',
            }}
          >
            Project Preview
          </div>
        )}
      </div>
      <h3 className="clickable-card-header">
        {project.title} ({project.year})
        <span className="clickable-header-icon">
          <FaArrowRight />
        </span>
        <small>{project.role}</small>
      </h3>
      <p>{project.shortDescription}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '0.75rem',
              color: '#e29ba7',
              border: '1px solid #e29ba740',
              borderRadius: '4px',
              padding: '2px 8px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  )
}
