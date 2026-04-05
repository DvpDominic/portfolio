const projects = [
  {
    id: 'project-1',
    video: '/videos/project1.mp4',
    title: 'Upside down',
    year: '2026',
    role: 'Technical Artist',
    engine: 'Unreal Engine 5',
    shortDescription:
      'A brief description of your first project. Replace this with actual project details.',
    description: [
      'This is a detailed description of your first project. Explain what the project is about, what problem it solves, and what technologies you used.',
      'Add more paragraphs to describe different aspects of the project.',
    ],
    tags: ['Unreal Engine'],
    sections: [
      {
        title: 'Introduction',
        content: [
          'Describe the introduction and motivation behind this project. What inspired you to build it? What challenges did you face?',
        ],
      },
      {
        title: 'Technical Details',
        content: [
          'Explain the technical implementation details. What architecture did you use? What were the key technical decisions?',
        ],
      },
      {
        title: 'What I Learned',
        content: [
          'Reflect on what you learned during this project. What skills did you develop? What would you do differently?',
        ],
      },
    ],
  },
  {
    id: 'project-2',
    title: 'Project Two',
    year: '2024',
    role: 'Frontend Developer',
    engine: 'React / TypeScript',
    shortDescription:
      'A brief description of your second project. Replace this with actual project details.',
    description: [
      'This is a detailed description of your second project.',
    ],
    tags: ['TypeScript', 'React', 'Tailwind CSS'],
    sections: [
      {
        title: 'Introduction',
        content: [
          'Describe the introduction and motivation behind this project.',
        ],
      },
      {
        title: 'Key Features',
        content: [
          'Highlight the key features and functionalities you implemented.',
        ],
      },
      {
        title: 'What I Learned',
        content: [
          'Share your learnings and growth from working on this project.',
        ],
      },
    ],
  },
  {
    id: 'project-3',
    title: 'Project Three',
    year: '2024',
    role: 'Backend Developer',
    engine: 'Python / Django',
    shortDescription:
      'A brief description of your third project. Replace this with actual project details.',
    description: [
      'This is a detailed description of your third project.',
    ],
    tags: ['Python', 'Django', 'PostgreSQL'],
    sections: [
      {
        title: 'Introduction',
        content: [
          'Describe the introduction and motivation behind this project.',
        ],
      },
      {
        title: 'Architecture',
        content: [
          'Explain the system architecture and design patterns used.',
        ],
      },
      {
        title: 'What I Learned',
        content: [
          'Reflect on your experience building this project.',
        ],
      },
    ],
  },
  {
    id: 'project-4',
    title: 'Project Four',
    year: '2023',
    role: 'Full Stack Developer',
    engine: 'Next.js',
    shortDescription:
      'A brief description of your fourth project. Replace this with actual project details.',
    description: [
      'This is a detailed description of your fourth project.',
    ],
    tags: ['Next.js', 'Prisma', 'Vercel'],
    sections: [
      {
        title: 'Introduction',
        content: [
          'Describe the introduction and motivation behind this project.',
        ],
      },
      {
        title: 'Implementation',
        content: [
          'Walk through the key implementation details.',
        ],
      },
      {
        title: 'What I Learned',
        content: [
          'Share what this project taught you.',
        ],
      },
    ],
  },
]

export default projects
