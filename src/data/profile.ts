// All website content lives here. Edit this file to change text; the layout reads from it.
// Empty strings ("") hide the related element instead of showing a broken link.

export const profile = {
  nameEN: 'Luigi Thoriq Kholis',
  nameCN: '路易吉',
  studentId: 'M1461038',
  program: 'M.S. in Artificial Intelligence',
  university: 'Chang Gung University',
  location: 'Taoyuan, Taiwan',
  // Put your photo in public/images/ and write the file name here, e.g. 'images/photo.jpg'
  photo: '',
  bio: [
    'I am a master’s student in Artificial Intelligence at Chang Gung University and a research assistant at the university’s AI Center, where I fine-tune Qwen large language models.',
    'Before moving to Taiwan, I studied Informatics Engineering in Cirebon, Indonesia, and spent two and a half years keeping a university’s IT systems and academic data in order. I still enjoy building small web applications on the side.',
  ],
  interests: ['LLM fine-tuning', 'Medical AI', 'AIoT', 'Data preparation'],
};

export const education = [
  {
    period: '2026 to present',
    title: 'Master of Science in Artificial Intelligence',
    place: 'Chang Gung University, Taoyuan, Taiwan',
    detail:
      'Coursework: Machine Learning, Natural Language Processing, Multi-Agent Systems, AIoT, Reinforcement Learning, Medical Image Processing.',
  },
  {
    period: '2020 to 2024',
    title: 'Bachelor of Informatics Engineering',
    place: 'Muhammadiyah University of Cirebon, Indonesia',
    detail: 'GPA 3.48 / 4.00. Final project: a scheduling and administration system for community health centers.',
  },
];

export const experience = [
  {
    period: '2026 to present',
    title: 'Research Assistant',
    place: 'AI Center, Chang Gung University',
    detail: 'Fine-tune Qwen language models for AI Center research projects, run and monitor GPU training jobs, and document results for the team.',
  },
  {
    period: 'Jan 2022 to Aug 2024',
    title: 'IT Support Specialist and Data Management',
    place: 'Muhammadiyah University of Cirebon',
    detail: 'Maintained IT infrastructure and academic information systems, and reorganized institutional databases and document storage.',
  },
  {
    period: 'Nov 2023 to Dec 2023',
    title: 'Software Developer Intern',
    place: 'PT Akbar Teknologi Gemilang, Cirebon',
    detail: 'Built modules for SI APIK, an administration system for community health centers (Puskesmas).',
  },
];

export const extras = {
  certifications: [
    'Certified Junior Web Programming, BNSP Indonesia (2024)',
    'Certified Digital Marketing, BNSP Indonesia (2024)',
  ],
  languages: ['Indonesian (native)', 'English (TOEFL ITP 530)'],
};

export const research = {
  title: 'Fine-tuning Qwen Large Language Models',
  lab: 'AI Center, Chang Gung University',
  period: '2026 to present',
  role: 'Research Assistant',
  // Add specifics you are allowed to share: task/domain, model size, dataset, method (LoRA, full FT), results.
  summary:
    'Adapting open Qwen language models to the needs of AI Center research projects through fine-tuning.',
  work: [
    'Fine-tune Qwen models for research projects at the AI Center.',
    'Run and monitor GPU training jobs.',
    'Document training settings and results for the research team.',
  ],
  tools: ['Python', 'Qwen', 'GPU training'],
  link: '', // paper, poster, or lab page URL if one can be shared publicly
};

export const projects = [
  {
    title: 'MedTwin CareBot',
    subtitle: 'Medication adherence monitoring for elderly patients',
    context: 'Academic team project, AIoT course',
    description:
      'A software robot companion that watches a webcam feed with YOLOv8 to detect whether a patient is present and taking their pills. A digital twin of the patient estimates adherence risk, and MQTT pushes real-time alerts to a caregiver dashboard.',
    tools: ['YOLOv8', 'Digital twin', 'MQTT', 'Python'],
    link: '',
  },
  {
    title: 'SI APIK',
    subtitle: 'Scheduling and administration system for community health centers',
    context: 'Internship and undergraduate final project, 2023 to 2024',
    description:
      'An information system for Puskesmas staff covering correspondence, activity documentation, budget tracking, and village and employee records. The prototype was later used internally at a health center.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
    link: '',
  },
];

export const contact = {
  email: 'luigithoriq@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luigithoriq',
  github: '', // e.g. 'https://github.com/your-username'
};
