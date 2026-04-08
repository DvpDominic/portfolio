import profile from '../data/profile'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className="content">
      {/* About Section */}
      <section id="about">
        <div className="about-information">
          <div
            className="profile-image"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#252525',
              color: '#e29ba7',
              fontSize: '3rem',
              fontWeight: 700,
            }}
            aria-label={`Profile picture of ${profile.name}`}
          >
            {profile.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="about-text">
            {profile.about.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <h2>Projects</h2>
      <div className="experience">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Education Section */}
      <h2>Education</h2>
      <div className="experience">
        {profile.education.map((edu, i) => (
          <section className="job-card" key={i}>
            <h3>
              {edu.school} ({edu.years})
              <small>
                {edu.degree}, {edu.field}
              </small>
            </h3>
          </section>
        ))}
      </div>

      {/* Technical Skills Section */}
      <h2>Technical Skills</h2>
      <ul className="badge-list">
        {profile.skills.map((skill) => (
          <li className="badge" key={skill}>
            {skill}
          </li>
        ))}
      </ul>

    </div>
  )
}
