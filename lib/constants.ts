import { SiFacebook, SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { FaLinkedinIn } from "react-icons/fa";

export const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT ?? 3000;
export const SITE_URL = isProduction ? "https://nevin.vercel.app" : `http://localhost:${PORT}`;

export const GITHUB_USERNAME = "Gojithprasad";
export const SITE_NAME = "Gojith prasad Portfolio";
export const SITE_GITHUB_URL = "https://github.com/Gojithprasad";
export const SITE_FACEBOOK_URL = "https://www.facebook.com/gojithprasad";
export const SITE_INSTAGRAM_URL = "https://www.instagram.com/__gp_ji";
export const SITE_LINKEDIN_URL = "https://www.linkedin.com/in/gojith-prasad/";

export const authorName = "Gojith Prasad";

export const SITE_KEYWORDS = [
  `${authorName}`, "Software Engineer", "React Developer", "Next.js Developer", "Full Stack Developer",
  "Mendix Developer", "TypeScript Developer", "JavaScript Developer", "Web Developer", "Web Development", "Tech Enthusiast",
  "Frontend Developer", "Backend Developer", "App Development", "Tech Portfolio", "GitHub", "Personal Website",
  "Software Development", "Software Solutions", "Web Apps", "Tech Projects", "Tech Stack", "Developer Portfolio",
  "Developer Journey", "Software Engineering", "React Projects", "Full Stack Projects", "Next.js Projects",
  "TypeScript Projects", "App Development Projects", "Open Source Projects", "Tech Expertise"
];

export const SOCIAL_LINKS = [
  {
    href: SITE_GITHUB_URL,
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: SITE_FACEBOOK_URL,
    title: "Facebook",
    icon: SiFacebook,
  },
  {
    href: SITE_INSTAGRAM_URL,
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: SITE_LINKEDIN_URL,
    title: "LinkedIn",
    icon: FaLinkedinIn,
  },
];

//Layout
export const layoutUI = {
  lightImagePath: "/images/logo/glogo-black-transparent.svg",
  darkImagePath: "/images/logo/glogo-white-transparent.svg",
};

//Home Page
export const homePage = {
  title: "Gojith Prasad's Portfolio",
  description: "Gojith Prasad's Portfolio Website Home Page",
  metaTitle: `Meet ${authorName} - Building the Future with Modern Technology`,
  metaDesc: `${authorName} is a Software Engineer with a drive for creating impactful, scalable solutions across platforms using the latest in modern technology and development tools.`,
  metaKeywords: [
    "Software Engineer", "Digital Solutions", "Web Development", "Modern Technologies",
    "React", "Next.js", "TypeScript", "JavaScript", "Frontend Developer", "Tech Enthusiast",
    "Portfolio", "Web Apps", "India Developer", "GitHub", "Personal Website"
  ],
};

export const ABOUTME = {
  aboutMe: "About Me",
  knowMore: "Know more about me",
} as const;

export const contactInfo = {
  promptHeading: "Any questions?",
  promptText: "Feel free to reach out to me!",
  email: "gojithprasad005@gmail.com",
};

export const introText = {
  greetingLeft: `I'm ${authorName}, a Software Engineer building`,
  greetingRight: "websites using modern technologies",
  location: "India • UTC/GMT +5:30",
  imagePath: "/images/logo/glogo-white-black-bg.svg",
};

export const techTags: TechTags = {
  author: "Gojith", // First name only
  imagePath: "/images/logo/glogo-black-white-bg.svg",
  label: "Next.js",
  label2: "React.js",
  label3: "TypeScript",
  label4: "JavaScript",
};

//About Page
export const aboutPage = {
  title: "About",
  description: `Hi there! I am ${authorName}, a Software Engineer who loves to solve problems using modern technologies.`,
  metaTitle: `Get to Know ${authorName} - Passionate Software Engineer & Tech Enthusiast`,
  metaDesc: `Explore ${authorName}'s background, skills, and mindset. Learn how his love for technology, creativity, and problem-solving defines his journey as a software engineer.`,
  metaKeywords: [
    "Software Engineer", `About ${authorName}`, "Tech Professional", "Web Developer",
    "Tech Enthusiast", "React.js", "Next.js", "Full Stack Developer", "Software Development",
    "Creative Thinker", "Problem Solver", "Team Player", "Software Solutions", "Developer Journey"
  ],
};

export const whoAmIData = {
  bio: {
    role: "Software Engineer",
    birthDate: "2001-02-11", //yyyy-mm-dd format strictly
    description: "I'm passionate about building cutting-edge applications that solve real-world problems. With a blend of technical expertise, creative thinking, and a constant hunger for learning, I develop solutions that are not only functional but also impactful.",
  },
  skills: ["React.js", "Next.js", "PostgreSQL", "MySQL", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap", "M-UI", "Git", "GitHub", "Zustand", "Redux", "Firebase", "VS Code", "Adobe XD", "Vite", "Canva", "Photoshop", "Figma", "Webpack,"],
  whyMe: [
    {
      id: 1,
      text: "A creative thinker with a knack for solving challenging problems.",
    },
    {
      id: 2,
      text: "Always on the pulse of the latest tech trends to deliver forward-thinking solutions.",
    },
    {
      id: 3,
      text: "A team player with a passion for collaboration and innovation.",
    },
  ],
  aboutThisSite: {
    Framework: "Next.js",
    Authentication: "Next Auth",
    "State Management": "Zustand",
    Deployment: "Vercel",
    Styling: "Tailwind CSS",
    "UI Components": ["Headless UI", "Radix UI", "Shadcn UI"],
    Animations: ["Motion", "React Spring", "TailwindCSS Animate"],
  },
};

//Cert Page
export const certPage = {
  title: "Certificates",
  description: "Check out some of the certifications I have earned.",
  metaTitle: `${authorName}'s Certifications & Achievements`,
  metaDesc: `Explore the professional certifications of ${authorName}, highlighting his expertise and commitment to mastering modern software technologies.`,
  metaKeywords: [
    `${authorName} Projects`, "Software Engineering Projects", "Web Development Projects",
    "React Projects", "Next.js Projects", "TypeScript Projects", "GitHub Portfolio", "Tech Projects",
    "Full Stack Development", "Open Source Projects", "Software Solutions", "App Development"
  ],
};

export const certificates: Certificate[] = [
   {
    id: 1,
    certificateName: "Programming for Everybody (Getting Started with Python)",
    description:
      "An online credit course authorized by the University of Michigan and offered through Coursera, focusing on beginner-level Python programming.",
    issuer: "University of Michigan",
    issueDate: "2022-01-17",
    imgPath: "/images/certificates/cer4.jpg",
  },
   {
    id: 2,
    certificateName: "Python Data Structures",
    description:
      "An online credit course authorized by the University of Michigan and offered through Coursera, covering key Python data structures.",
    issuer: "University of Michigan",
    issueDate: "2022-02-13",
    imgPath: "/images/certificates/cer3.jpg",
  },
  {
    id: 3,
    certificateName: "Data Analyst Using Python – 7 Days Bootcamp",
    description:
      "Completed a 7-day bootcamp on Data Analyst Using Python, conducted by DevTown in collaboration with Microsoft Learn Student Ambassadors and Google Developer Groups.",
    issuer: "DevTown",
    issueDate: "2021-xx-xx", // date not shown in certificate
    imgPath: "/images/certificates/cer1.jpg",
  },
  {
    id: 4,
    certificateName: "Artificial Intelligent Techniques to Address Societal Challenges",
    description:
      "Participation certificate for attending the IEEE R10 EA funded Capacity Building Workshop on Artificial Intelligent Techniques to Address Societal Challenges, organized by IEEE India Council.",
    issuer: "IEEE India Council",
    issueDate: "2021-10-03",
    imgPath: "/images/certificates/cer2.jpg",
  },
 
 
];

// Journey Page
export const journeyPage = {
  title: "Journey",
  description:
    "Explore my growth as a Front-End Developer, from academic foundations to real-world projects and professional experience.",
  metaTitle: `${authorName}'s Career & Education Timeline`,
  metaDesc: `Discover the development journey of React Developer ${authorName}, including his freelance work, internships, technical skills, and education background.`,
  metaKeywords: [
    `${authorName} Journey`,
    "React Developer Career",
    "Front-End Developer Experience",
    "Web Developer Timeline",
    "Tech Career Growth",
    "Developer Portfolio",
    "Software Engineering Journey",
    "Professional Development",
    "Career Timeline",
  ],
};

// ===================== EXPERIENCE =====================
export const experiences: Experience[] = [
  {
    id: 1,
    title: "Freelance Front-End Developer",
    organization: "Remote",
    date: "Nov 2024 – April 2025",
    description: [
      "Collaborated with a remote freelance team on client-based projects.",
      "Worked on the official Badminton FSpS website and other business-focused web solutions.",
      "Built responsive UIs using HTML, CSS, JavaScript, and React.js.",
      "Handled client communication, feedback loops, and delivery of user-focused features.",
    ],
  },
  {
    id: 2,
    title: "Front-End Developer Intern",
    organization: "Whoolab Technologies",
    date: "Nov 2023 – May 2024",
    description: [
      "Developed responsive web applications using React.js, HTML, CSS, and JavaScript.",
      "Collaborated with designers to implement user-friendly interfaces.",
      "Performed code reviews, debugging, and optimization to enhance performance.",
      "Worked with GitHub for version control and team collaboration.",
    ],
  },
];


export const education: Education[] = [
  {
    id: 1,
    course: "B.Tech in Computer Science & Engineering",
    institution:
      "College of Engineering and Management Punnapra, Alappuzha, Kerala",
    period: "2019 – 2023",
  },
  {
    id: 2,
    course: "Higher Secondary (Computer Science Stream)",
    institution: "NSS Higher Secondary School, Nedumudy, Kerala",
    period: "2017 – 2019",
  },
  {
    id: 3,
    course: "SSLC",
    institution: "GHS Thekkekara, Kerala",
    period: "2007-2017",
  },
];


//Projects Page
export const projectPage = {
  title: "Projects",
  description: "Check out some of the projects I've worked on.",
  metaTitle: `${authorName}'s Project Portfolio`,
  metaDesc: `Browse through ${authorName}'s latest development projects, featuring modern tech stacks like React, Next.js, TypeScript, Spring Boot, and Tailwind CSS. Built to be performant, scalable, and visually stunning.`,
  metaKeywords: [
    `${authorName} Projects`, "Software Engineering Projects", "Web Development Projects",
    "React Projects", "Next.js Projects", "TypeScript Projects", "GitHub Portfolio", "Tech Projects",
    "Full Stack Development", "Open Source Projects", "Software Solutions", "App Development"
  ],
};

export const projects: Project[] = [
  {
    id: "project1",
    name: "Link-Up",
    description: "A real-time chat application built using React.js and Firebase.",
    detailedDescription:
      "Link-Up is a real-time chat application developed using React.js and Firebase. It features secure authentication, instant messaging, image sharing, and real-time updates powered by Firebase Realtime Database. The application provides a smooth and fast user experience with a fully responsive UI. Users can log in, chat instantly, and share messages across devices with no delays. This project highlights skills in React.js, Firebase authentication, real-time database interactions, component architecture, and responsive UI design.",
    techstack: ["React.js", "Firebase", "JavaScript", "HTML", "CSS"],
    slug: "link-up",
    website: "https://gojithprasad.github.io/Link_up/",
    imgPath: "/images/projects/project1.png"
  },

  {
   id: "project2",
    name: "Restaurant Website",
    description: "A modern restaurant landing page with a clean and responsive UI.",
    detailedDescription:
      "A restaurant website built using React.js, Material-UI, and Vite. Designed for fast performance, it includes sections for services, dishes, and navigation with a fully responsive UI. The project demonstrates component-based development and clean UI structuring.",
    techstack: ["React.js", "Material-UI", "Vite", "JavaScript"],
    slug: "restaurant-website",
    website: "https://gojithprasad.github.io/Restaurant-Web/",
    imgPath: "/images/projects/project2.png"
  },
    {
    id: "project3",
    name: "Portfolio Website",
    description: "My personal portfolio showcasing my skills, experience, and projects.",
    detailedDescription:
      "A professionally crafted portfolio built using React.js. It includes smooth navigation, responsive design, a projects gallery, and a fully validated contact form. The portfolio highlights live demos and GitHub repositories of all major projects.",
    techstack: ["React.js", "HTML", "CSS", "JavaScript"],
    slug: "portfolio",
    website: "https://gojithprasad.github.io/My-Portfolio/",
    imgPath: "/images/projects/project3.png"
  },
  {
     id: "project4",
    name: "Badminton FSpS (Freelance Work)",
    description: "Contributed to the official Badminton FSpS website during freelance work.",
    detailedDescription:
      "As a freelance Frontend Developer, I contributed to the official Badminton FSpS website. Responsibilities included creating responsive UI, improving layout consistency, and delivering clean and optimized HTML/CSS/JS code while collaborating remotely with the team.",
    techstack: ["HTML", "CSS", "JavaScript"],
    slug: "badminton-fsps",
    website: "https://badmintonfsps.cz/",
    imgPath: "/images/projects/project4.png"
  },

]

//Tech Page
export const techPage = {
  title: "Tech",
  description: "Check out some of the technologies and tools i am using",
  metaTitle: `${authorName}'s Tech Stack`,
  metaDesc: `Browse through ${authorName}'s latest development projects, featuring modern tech stacks like React, Next.js, TypeScript, Spring Boot, and Tailwind CSS. Built to be performant, scalable, and visually stunning.`,
  metaKeywords: [
    "Tech Stacks", "Tools I Use", "React.js", "Next.js", "TypeScript", "JavaScript", "Spring Boot", "Mendix",
    "MySQL", "PostgreSQL", "Tailwind CSS", "Zustand", "GitHub", "DigitalOcean", "Linux", "VS Code",
    "Tech Stack Portfolio", "Development Tools", "Frontend Tech", "Backend Tech", "Mendix", "Power Automate"
  ],
};

export const stackGroups = [
  {
    id: "coding",
    name: "Coding Tools",
    menuItems: [
      {
        imagePath: "/images/tech/vscode.png",
        name: "VS Code",
        description: "Code editor",
        url: "https://code.visualstudio.com/",
      },
      {
        imagePath: "/images/tech/material-icon-theme.png",
        name: "Material Icons",
        description: "VS Code theme",
        url: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
      },
      {
        imagePath: "/images/tech/intellij.png",
        name: "IntelliJ IDEA",
        description: "Java IDE",
        url: "https://www.jetbrains.com/idea/",
      },
      {
        imagePath: "/images/tech/sts.png",
        name: "Spring Tool Suite",
        description: "Spring IDE",
        url: "https://spring.io/tools",
      },
      {
        imagePath: "/images/tech/git.png",
        name: "Git",
        description: "Version control",
        url: "https://git-scm.com",
      },
      {
        imagePath: "/images/tech/github.png",
        name: "GitHub",
        description: "Code hosting",
        url: "https://github.com",
      },
    ],
  },
  {
    id: "design",
    name: "Design Tools",
    menuItems: [
      {
        imagePath: "/images/tech/figma.png",
        name: "Figma",
        description: "UI design",
        url: "https://www.figma.com",
      },
      {
        imagePath: "/images/tech/canva.png",
        name: "Canva",
        description: "Graphic design",
        url: "https://www.canva.com",
      },
      {
        imagePath: "/images/tech/picsart.png",
        name: "Picsart",
        description: "Photo editor",
        url: "https://picsart.com",
      },
    ],
  },
  {
    id: "hosting",
    name: "Deployment & Hosting",
    menuItems: [
      {
        imagePath: "/images/tech/vercel.png",
        name: "Vercel",
        description: "Web hosting",
        url: "https://vercel.com",
      },
      {
        imagePath: "/images/tech/netlify.png",
        name: "Netlify",
        description: "Deploy platform",
        url: "https://www.netlify.com",
      },
      {
        imagePath: "/images/tech/cloudflare.png",
        name: "Cloudflare",
        description: "DNS & CDN",
        url: "https://www.cloudflare.com/",
      },
    ],
  },
  {
    id: "tools",
    name: "Productivity Tools",
    menuItems: [
      {
        imagePath: "/images/tech/postman.png",
        name: "Postman",
        description: "API testing",
        url: "https://www.postman.com/",
      },
      {
        imagePath: "/images/tech/chatgpt.png",
        name: "ChatGPT",
        description: "AI assistant",
        url: "https://chat.openai.com",
      },
    ],
  },
  {
    id: "utilities",
    name: "Utilities",
    menuItems: [
      {
        imagePath: "/images/tech/winrar.png",
        name: "WinRAR",
        description: "File archiver",
        url: "https://www.win-rar.com",
      },
      {
        imagePath: "/images/tech/winscp.png",
        name: "WinSCP",
        description: "FTP client",
        url: "https://winscp.net",
      },
    ],
  },
  {
    id: "browsers",
    name: "Browsers",
    menuItems: [
      {
        imagePath: "/images/tech/chrome.png",
        name: "Chrome",
        description: "Web browser",
        url: "https://www.google.com/chrome/",
      },
      {
        imagePath: "/images/tech/brave.png",
        name: "Brave",
        description: "Private browser",
        url: "https://brave.com",
      },
    ],
  },
];

//Coming Soon Page
export const comingSoon = {
  title: "Coming soon",
  description: "The page you are viewing is under construction",
  metaTitle: `Coming soon`,
  metaDesc: `The page you are viewing is under construction`,
  metaKeywords: [
    "Coming Soon", "Under Construction"
  ],
};

// Default Metadata
export const metadataValues = {
  description: `I'm ${authorName}, a passionate software engineer specializing in building innovative digital solutions using modern technologies like React, Next.js, and TypeScript.`,
  openGraph: {
    description: `Explore the portfolio of ${authorName} — a Software Engineer creating impactful projects, sharing his career journey, and more. Dive into his work with cutting-edge technologies.`,
    imagePath: "/images/logo/share.png",
    imageType: "image/png",
  },
  twitter: {
    description: "Software engineer crafting seamless digital experiences with Next.js, React, TypeScript, and more.",
    imagePath: `/images/logo/share.png`,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};