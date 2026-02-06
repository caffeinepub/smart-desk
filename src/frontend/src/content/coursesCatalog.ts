export interface Course {
  name: string;
  description?: string;
  topics?: string[];
  popular?: boolean;
}

export interface CourseCategory {
  name: string;
  description: string;
  color: string;
  courses: Course[];
}

export const coursesCatalog: CourseCategory[] = [
  {
    name: 'Basic Computer Courses',
    description: 'Build a strong foundation in computer fundamentals and essential office skills',
    color: 'text-emerald-600 dark:text-emerald-400',
    courses: [
      {
        name: 'DCA (Diploma in Computer Applications)',
        description: 'Comprehensive diploma covering computer fundamentals, office applications, and internet basics',
        topics: ['Computer Fundamentals', 'Operating Systems', 'MS Office', 'Internet & Email'],
        popular: true,
      },
      {
        name: 'ADCA (Advanced Diploma in Computer Applications)',
        description: 'Advanced diploma with in-depth coverage of applications and programming basics',
        topics: ['Advanced MS Office', 'Database Management', 'Programming Basics', 'Web Technologies'],
        popular: true,
      },
      {
        name: 'MS Office',
        description: 'Master Microsoft Office suite for professional productivity',
        topics: ['MS Word', 'MS Excel', 'MS PowerPoint', 'MS Outlook'],
        popular: true,
      },
      {
        name: 'Data Entry',
        description: 'Learn fast and accurate data entry skills for office work',
        topics: ['Typing Speed', 'Data Accuracy', 'Excel Data Entry', 'Database Entry'],
      },
      {
        name: 'Typing',
        description: 'Improve your typing speed and accuracy for professional work',
        topics: ['Touch Typing', 'Speed Building', 'English Typing', 'Hindi Typing'],
      },
      {
        name: 'Spoken English',
        description: 'Enhance your English communication skills for professional success',
        topics: ['Grammar', 'Vocabulary', 'Pronunciation', 'Conversation Practice'],
      },
    ],
  },
  {
    name: 'Programming Courses',
    description: 'Learn programming languages and software development from basics to advanced',
    color: 'text-teal-600 dark:text-teal-400',
    courses: [
      {
        name: 'C Programming',
        description: 'Master the fundamentals of programming with C language',
        topics: ['Syntax & Basics', 'Data Types', 'Control Structures', 'Functions & Pointers'],
      },
      {
        name: 'C++ Programming',
        description: 'Learn object-oriented programming with C++',
        topics: ['OOP Concepts', 'Classes & Objects', 'Inheritance', 'Polymorphism'],
        popular: true,
      },
      {
        name: 'Java Programming',
        description: 'Build robust applications with Java',
        topics: ['Java Basics', 'OOP in Java', 'Collections', 'Exception Handling'],
        popular: true,
      },
      {
        name: 'Python Programming',
        description: 'Learn the versatile Python language for various applications',
        topics: ['Python Basics', 'Data Structures', 'Libraries', 'Web Development'],
        popular: true,
      },
      {
        name: 'Database Programming',
        description: 'Master SQL and database management',
        topics: ['SQL Queries', 'Database Design', 'MySQL', 'PostgreSQL'],
      },
      {
        name: 'Web Development',
        description: 'Build modern websites and web applications',
        topics: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        popular: true,
      },
    ],
  },
  {
    name: 'Design Courses',
    description: 'Master graphic design, web design, and creative tools for professional projects',
    color: 'text-cyan-600 dark:text-cyan-400',
    courses: [
      {
        name: 'Adobe Photoshop',
        description: 'Professional photo editing and graphic design',
        topics: ['Image Editing', 'Layers & Masks', 'Color Correction', 'Digital Art'],
        popular: true,
      },
      {
        name: 'CorelDRAW',
        description: 'Vector graphics and illustration design',
        topics: ['Vector Design', 'Logo Creation', 'Illustrations', 'Print Design'],
        popular: true,
      },
      {
        name: 'Graphic Design',
        description: 'Complete graphic design course covering multiple tools',
        topics: ['Design Principles', 'Typography', 'Branding', 'Portfolio Building'],
        popular: true,
      },
      {
        name: 'PageMaker DTP',
        description: 'Desktop publishing for professional layouts',
        topics: ['Page Layout', 'Typography', 'Print Production', 'Publishing'],
      },
      {
        name: 'AutoCAD',
        description: 'Computer-aided design for engineering and architecture',
        topics: ['2D Drafting', '3D Modeling', 'Technical Drawing', 'Architectural Plans'],
      },
      {
        name: 'Web Design',
        description: 'Design beautiful and functional websites',
        topics: ['UI/UX Design', 'Responsive Design', 'Wireframing', 'Prototyping'],
        popular: true,
      },
      {
        name: 'HTML & CSS',
        description: 'Build and style web pages from scratch',
        topics: ['HTML5 Structure', 'CSS3 Styling', 'Flexbox & Grid', 'Animations'],
        popular: true,
      },
    ],
  },
];
