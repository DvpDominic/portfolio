// ──────────────────────────────────────────────
// EDIT THIS FILE to add your own projects.
// Each project appears as a card on the home page
// and has its own detail page at /portfolio/<slug>.
// ──────────────────────────────────────────────

export const projects = [
  {
    slug: 'project-one',
    title: 'Project One',
    year: 2024,
    tagline: 'A brief one-line description of this project.',
    role: 'Full Stack Developer',
    teamSize: 3,
    timeFrame: '4 Weeks',
    engine: 'React / Node.js',
    thumbnail: 'https://placehold.co/800x450/1e1e1e/8bc5bf?text=Project+One',
    description: `
      <p>Describe your project here. What was the goal? What problem did it solve?</p>
      <p>Talk about the technologies you used, the challenges you faced, and what you learned.</p>
    `,
    media: [
      {
        type: 'image',
        src: 'https://placehold.co/800x450/252525/8bc5bf?text=Screenshot+1',
        caption: 'Main dashboard view',
      },
      {
        type: 'image',
        src: 'https://placehold.co/800x450/252525/8bc5bf?text=Screenshot+2',
        caption: 'Detail page',
      },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/yourusername/project-one' },
    ],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    year: 2024,
    tagline: 'Another cool project description.',
    role: 'Frontend Developer',
    teamSize: 2,
    timeFrame: '6 Weeks',
    engine: 'Vue.js / Firebase',
    thumbnail: 'https://placehold.co/800x450/1e1e1e/8bc5bf?text=Project+Two',
    description: `
      <p>Describe your second project here. What was the goal?</p>
      <p>Explain the interesting technical decisions you made.</p>
    `,
    media: [
      {
        type: 'image',
        src: 'https://placehold.co/800x450/252525/8bc5bf?text=Screenshot+1',
        caption: 'Home screen',
      },
    ],
    links: [
      { label: 'Live Demo', url: 'https://example.com' },
    ],
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    year: 2023,
    tagline: 'A third project to showcase.',
    role: 'Backend Developer',
    teamSize: 5,
    timeFrame: '3 Months',
    engine: 'Python / Django',
    thumbnail: 'https://placehold.co/800x450/1e1e1e/8bc5bf?text=Project+Three',
    description: `
      <p>Describe your third project. What was unique about it?</p>
      <p>Highlight your contributions and the impact of the project.</p>
    `,
    media: [
      {
        type: 'image',
        src: 'https://placehold.co/800x450/252525/8bc5bf?text=Screenshot+1',
        caption: 'API architecture diagram',
      },
      {
        type: 'image',
        src: 'https://placehold.co/800x450/252525/8bc5bf?text=Screenshot+2',
        caption: 'Performance dashboard',
      },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/yourusername/project-three' },
    ],
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    year: 2023,
    tagline: 'Yet another project to show off.',
    role: 'Developer',
    teamSize: 1,
    timeFrame: '2 Weeks',
    engine: 'JavaScript / Canvas',
    thumbnail: 'https://placehold.co/800x450/1e1e1e/8bc5bf?text=Project+Four',
    description: `
      <p>A solo project you built. Describe the motivation behind it.</p>
      <p>What did you enjoy most about building it?</p>
    `,
    media: [],
    links: [],
  },
]
