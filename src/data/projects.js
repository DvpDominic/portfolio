const projects = [
  {
    id: 'project-1',
    video: '/videos/project1.mp4',
    title: 'Upside down',
    year: '2025',
    role: 'Technical Artist',
    engine: 'Unreal Engine 5',
    shortDescription:
      'A post apocalyptic world and turned it into "Upside Down" from Stranger Things using lighting, weather, fog, materials.',
    description: [
      'I did a little experiment with Unreal Engine 5 by making a post-apocalyptic game level and turning it into "Upside Down" from Stranger Things. Made it look unsettling using lighting, fog and different materials.',
      'I am also trying to create a lightweight UE5 plugin for weather system using C++, focused on runtime control over sky/lighting, volumetric clouds, fog and wind with data-driven presets and blend able transitions, open to adding editor tooling later for easier preview and tuning.',
    ],
    tags: ['Unreal Engine', 'Level building'],
  },
  {
    id: 'project-2',
    video: '/videos/project2.mp4',
    title: 'ShadowSplit',
    year: '2026',
    role: 'Game Programmer, Technical Artist',
    engine: 'Godot / GDScript',
    shortDescription:
      'Complete the level, time travel and complete the level again by beating your shadow.',
    description: [
      'The goal is simple: reach the portal. But in order to complete the level, you need to do it twice. In the second run, the portal will be spawning your clones that travel back in time and repeat your past actions.',
    ],
    tags: ['Godot', 'GDScript', 'Shaders'],
  },
  {
    id: 'project-3',
    video: '/videos/project3.mp4',
    title: 'EA Sports FC25, FC24, FIFA23, Ubisoft R6 ',
    year: '2022-2024',
    role: 'Technical Artist, Tools programmer',
    engine: 'EA Frostbite, Ubisoft Anvil, Maya/3DSMax',
    shortDescription:
      'AAA Games I have worked on as a Technical Artist and Tools Programmer during my tenure at Technicolor games.',
    description: [
      'Involved in Ubisoft-Rainbow Six Extraction, FIFA-23,24,25 & other AAA projects',
      'Accountable for development & testing custom tools and features for graphics softwares & game engines',
      'Coordinated with Technical Directors to support artists and programmers on daily work',
    ],
    tags: ['Python', 'C++', 'Maya/3DSMax'],
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
  },
]

export default projects
