export const galleryData = [
  {
    id: 1,
    title: "World Mental Health Day 2024",
    date: "2024-10-10",
    category: "AWARENESS",
    location: "Dar es Salaam, Tanzania",
    image: "galleryDemo",
    description: "Community outreach and awareness campaign featuring mental health talks, poster displays, and interactive sessions with students and community members.",
    tags: ["mental health", "awareness", "community", "students"]
  },
  {
    id: 2,
    title: "Suicide Prevention Outreach",
    date: "2024-09-10",
    category: "CAMPAIGN",
    location: "University of Dar es Salaam",
    image: "galleryDemo",
    description: "Comprehensive awareness campaign using posters, talks, and digital outreach to prevent suicide among university students.",
    tags: ["suicide prevention", "university", "students", "campaign"]
  },
  {
    id: 3,
    title: "International Self-Care Day",
    date: "2024-07-24",
    category: "SPORTS AND GAMES",
    location: "Central Park, Dar es Salaam",
    image: "galleryDemo",
    description: "A wellness event featuring sports, mindfulness games, hiking, and self-care routines to promote mental wellness.",
    tags: ["self-care", "wellness", "sports", "mindfulness"]
  },
  {
    id: 4,
    title: "PTSD Awareness Day",
    date: "2024-06-27",
    category: "PTSD AWARENESS",
    location: "Community Center",
    image: "galleryDemo",
    description: "Special program with Google Meet sessions and community posters on post-trauma healing and support.",
    tags: ["PTSD", "trauma", "healing", "support"]
  },
  {
    id: 5,
    title: "Maternal Mental Health Awareness",
    date: "2024-05-31",
    category: "PHYSICAL MEETING",
    location: "Maternity Hospital",
    image: "galleryDemo",
    description: "Focused event on the importance of maternal mental health and postpartum support for new mothers.",
    tags: ["maternal health", "postpartum", "mothers", "support"]
  },
  {
    id: 6,
    title: "Worker's Day Mental Health",
    date: "2024-05-01",
    category: "ONLINE MEETING",
    location: "Virtual Event",
    image: "galleryDemo",
    description: "Seminar on mental health in the workplace and supporting emotional well-being of employees.",
    tags: ["workplace", "employees", "mental health", "seminar"]
  },
  {
    id: 7,
    title: "National Alcohol Screening Day",
    date: "2024-04-06",
    category: "SCREENING",
    location: "Public Health Center",
    image: "galleryDemo",
    description: "A focused day for screening and awareness around alcohol and its mental health impact on communities.",
    tags: ["alcohol", "screening", "public health", "awareness"]
  },
  {
    id: 8,
    title: "World Women's Day",
    date: "2024-03-08",
    category: "PHYSICAL MEETING",
    location: "Women's Center",
    image: "galleryDemo",
    description: "Celebrating women's role in mental health advocacy with school talks and hospital visits.",
    tags: ["women", "advocacy", "celebration", "empowerment"]
  },
  {
    id: 9,
    title: "Self-Injury Awareness Day",
    date: "2024-03-01",
    category: "AWARENESS DAY",
    location: "Youth Center",
    image: "galleryDemo",
    description: "An awareness event focusing on self-harm prevention and support mechanisms for youth.",
    tags: ["self-harm", "youth", "prevention", "support"]
  },
  {
    id: 10,
    title: "Love and Mental Health",
    date: "2024-02-14",
    category: "ONLINE MEETING",
    location: "Virtual Event",
    image: "galleryDemo",
    description: "Exploring the impact of relationships on mental health through online discussion and poster campaigns.",
    tags: ["relationships", "love", "mental health", "discussion"]
  },
  {
    id: 11,
    title: "School Outreach & Evaluation",
    date: "2024-01-25",
    category: "OUTREACH",
    location: "Various Schools",
    image: "galleryDemo",
    description: "School engagement and evaluation session, collecting feedback and sharing mental wellness strategies.",
    tags: ["schools", "outreach", "evaluation", "students"]
  },
  {
    id: 12,
    title: "Mental Wellness Month Kickoff",
    date: "2024-01-11",
    category: "ONLINE MEETING",
    location: "Virtual Event",
    image: "galleryDemo",
    description: "Opening session to set wellness goals and share the year's vision across the MHHA community.",
    tags: ["wellness", "kickoff", "community", "goals"]
  }
];

export const galleryCategories = [
  { id: 'all', name: 'All Photos', count: galleryData.length },
  { id: 'AWARENESS', name: 'Awareness', count: galleryData.filter(item => item.category === 'AWARENESS').length },
  { id: 'CAMPAIGN', name: 'Campaigns', count: galleryData.filter(item => item.category === 'CAMPAIGN').length },
  { id: 'SPORTS AND GAMES', name: 'Sports & Games', count: galleryData.filter(item => item.category === 'SPORTS AND GAMES').length },
  { id: 'PTSD AWARENESS', name: 'PTSD Awareness', count: galleryData.filter(item => item.category === 'PTSD AWARENESS').length },
  { id: 'PHYSICAL MEETING', name: 'Physical Meetings', count: galleryData.filter(item => item.category === 'PHYSICAL MEETING').length },
  { id: 'ONLINE MEETING', name: 'Online Meetings', count: galleryData.filter(item => item.category === 'ONLINE MEETING').length },
  { id: 'SCREENING', name: 'Screening', count: galleryData.filter(item => item.category === 'SCREENING').length },
  { id: 'AWARENESS DAY', name: 'Awareness Days', count: galleryData.filter(item => item.category === 'AWARENESS DAY').length },
  { id: 'OUTREACH', name: 'Outreach', count: galleryData.filter(item => item.category === 'OUTREACH').length }
];

export const galleryYears = [
  { id: 'all', name: 'All Years', count: galleryData.length },
  { id: '2025', name: '2025', count: 0 }, // Will be updated when 2025 events are added
  { id: '2024', name: '2024', count: galleryData.length }
]; 