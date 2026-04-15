// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Section Logo's
import SuShodhLogo from './assets/company_logo/SuShodh_logo.png';
import ShreetecLogo from './assets/company_logo/Shreetec_logo.png';
import SkyiTechnologylogo from './assets/company_logo/Skyi_Technology_logo.webp';

// Education Section Logo's
import ZealLogo from './assets/education_logo/Zeal-College.png';
import SarhadLogo from './assets/education_logo/Sarhad-college.webp';
import MESRenukaSwaroopLogo from './assets/education_logo/RenukaSwaroop.jpg';

// Project Section Logo's
import VirtualRBuildToolsLogo from './assets/work_logo/Virtualr_Main.png';
import EcommerceJewelleryWebsLogo from './assets/work_logo/Ecommerce_Jewellery_Wbsite.png';
import QuizAppLogo from './assets/work_logo/Quiz_App.png';
import ToDoListLogo from './assets/work_logo/To_Do_List.png';
import TicTacToeGameLogo from './assets/work_logo/Tic_Tac_Toe.png';
import WeatherAppLogo from './assets/work_logo/Weather_App.png';
import BalloonPopGameLogo from './assets/work_logo/Balloon_Pop_Game.png';
import DashUILogo from './assets/work_logo/Dash_UI.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: SuShodhLogo,
      role: "Software Engineer - Intern",
      company: "SuShodh Edutech & Research Organization",
      date: "January 2025 - June 2025 · Hybrid",
      desc: "Architected a multi-role article submission system with dedicated dashboards for users, admins, and editorial members, streamlining the content review process and reducing manual coordination efforts by 60%. Integrated real-time discussion threads using jQuery and AJAX, enabling faster communication loops and editorial feedback, reducing the average revision cycle.Implemented modular backend logic and role-based access controls to securely manage 1,000+ article submissions with proper version control and tracking.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "AJAX",
        "Node JS",
        "MongoDB",
      ],
    },
    {
      id: 1,
      img: ShreetecLogo,
      role: "Fullstack Engineer",
      company: "Shreetec Power Solutions - Freelance",
      date: "September 2024 - December 2024",
      desc: "Designed and developed a responsive and scalable web application for Shreetec Power Solutions, focusing on delivering a seamless user experience and optimized performance across devices. Built dynamic frontend interfaces using React.js and Bootstrap, ensuring clean UI components and improved usability, while implementing RESTful APIs and backend services with Node.js. Managed database operations using MongoDB and handled deployment processes through cPanel, ensuring smooth hosting, maintenance, and application reliability.",
      skills: [
        "React.js",
        "Node.js",
        "Bootstrap",
        "CSS",
        "MongoDB",
        "JavaScript",
        "HTML5",
        "cPanel",
      ],
    },
    {
      id: 2,
      img: SkyiTechnologylogo,
      role: "Full Stack Engineer Intern",
      company: "SKYi Technology - Internship",
      date: "May 2024 - November 2024 - Hybrid",
      desc: "Developed and maintained full stack web applications using the MERN stack, focusing on building scalable architectures and delivering smooth, responsive user experiences across devices. Designed interactive and reusable frontend components with React.js and Tailwind CSS, improving UI consistency and enhancing overall application usability. Built RESTful APIs using Node.js and Express.js, integrated MongoDB and Firebase for efficient data management, and collaborated using GitHub for version control and team workflows. Assisted in deployment and hosting processes via cPanel, ensuring stable performance, secure configurations, and timely updates in a hybrid development environment.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "MongoDB",
        "Firebase",
        "GitHub",
        "cPanel",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: ZealLogo,
      school: "ZEAL Institute Of Business Administration, Computer Application & Research",
      date: "Sept 2023 - July 2025",
      grade: "7.30 CGPA",
      desc: "Completed my Master’s degree in Computer Applications (MCA) from ZEAL Institute of Business Administration, Computer Application & Research, Narhegaon, Pune. During my studies, I built a strong foundation in programming, software development, and problem-solving. Studied key subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. Actively participated in workshops and technical events to enhance practical knowledge and skills. This program helped me strengthen my technical expertise and prepare for real-world applications.",
      degree: "Master of Computer Applications (MCA)",
    },
    {
      id: 1,
      img: SarhadLogo,
      school: "Sarhad College of Arts, Commerce, and Science - Pune",
      date: "Sept 2020 - Aug 2023",
      grade: "73.90%",
      desc: "Completed my Bachelor’s degree in Computer Applications (BBA-CA) from Sarhad College, Pune. Throughout my studies, I gained knowledge in both business management and computer applications. Explored subjects like Programming, Web Development, Database Management Systems, and Software Development. Developed practical skills by working on projects that connect real-world business needs with technology. This program helped me build a strong foundation in both technical and analytical areas.",
      degree: "Bachelor of Business Administration – BBA (Computer Applications)",
    },
    {
      id: 2,
      img: SarhadLogo,
      school: "Sarhad College of Arts, Commerce, and Science - Pune",
      date: "Apr 2019 - February 2020",
      grade: "53.69%",
      desc: "Completed Class 12 (HSCE) from Vatsalya Public School, Govardhan, with a Commerce stream. Studied core subjects including Accountancy, Business Studies, and Economics. Built a strong foundation in financial concepts, business management, and analytical thinking. Developed an interest in technology and web development alongside academics. Focused on improving problem-solving skills and practical knowledge.",
    },
    {
      id: 3,
      img: MESRenukaSwaroopLogo,
      school: "MES Renuka Swaroop Memorial Girls High School, Pune",
      date: "Apr 2017 - March 2018",
      grade: "55.80%",
      desc: "I completed my Class 10 education from MES Renuka Swaroop Memorial Girls High School under the SSCE board. I studied core subjects including Science and Technology, along with Information Communication Technology (ICT) and Social Service, building a strong academic foundation.",
      degree: "SSCE(X), Science and Technology with ICT and Social Service",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "VirtualR Build Tools",
      description:
        "Designed and developed a modern, responsive landing page for Virtual Reality products and services using React, Vite, and Tailwind CSS. The project features a clean and visually appealing UI with smooth user experience. Built with a component-based architecture to ensure reusability and scalability. Optimized for performance and fast loading using Vite. The landing page effectively showcases VR products and services in an engaging and professional way.",
      image: VirtualRBuildToolsLogo,
      tags: ["HTML", "Vite", "Tailwind CSS", "JavaScript(ES6+)", "React JS", "API"],
      github: "https://github.com/SakshiParbat/Virtualr-Main",
      webapp: "https://virtualr-main.web.app/",
    },
    {
      id: 1,
      title: "Ecommerce Jewellery Webs",
      description:
        "Developed a responsive eCommerce jewellery website using React.js, JavaScript, HTML, and CSS. The platform features interactive UI components for seamless product listing and browsing. It enhances user experience with smooth navigation and a visually appealing design. Implemented a component-based architecture for better code reusability and scalability. Applied responsive design principles to ensure optimal performance across all devices.",
      image: EcommerceJewelleryWebsLogo,
      tags: ["React JS", "Vite", "HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/SakshiParbat/Ecommerce-Jewellery-Website",
      webapp: "https://ecommerce-jewellery-webs-fc373.web.app/",
    },
    {
      id: 2,
      title: "Quiz App",
      description:
        "An interactive Quiz Application developed using HTML, CSS, and JavaScript that allows users to answer multiple-choice questions in a simple and engaging interface. The application presents questions one by one and lets users select their answers easily. It provides instant feedback and calculates the final score at the end of the quiz. The design is user-friendly and responsive, ensuring a smooth experience across devices. This project helps improve knowledge while making learning fun and interactive.",
      image: QuizAppLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/SakshiParbat/Quiz-App",
      webapp: "https://quiz-app-aa2c8.web.app/",
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description:
        "Developed a simple Tic Tac Toe game using React with an interactive and user-friendly interface. The application allows two players to play the classic game seamlessly. Implemented game logic to handle turns, win conditions, and draw scenarios. Designed clean UI components for better user experience. This project demonstrates strong understanding of React fundamentals and state management.",
      image: TicTacToeGameLogo,
      tags: ["React JS", "NPM", "Vite", "HTML", "JavaScript", "Tailwind CSS",],
      github: "https://github.com/SakshiParbat/TicTacToe",
      webapp: "https://tic-tac-toe-39203.web.app/",
    },
    {
      id: 4,
      title: "To-Do List",
      description:
        "Developed a To-Do List web application with essential task management features like adding, updating, and deleting tasks. The app offers a clean and intuitive interface for organizing daily activities. Implemented responsive design to ensure smooth usability across devices. Added simple UI enhancements to improve user experience. This project demonstrates practical use of core web development concepts.",
      image: ToDoListLogo,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/SakshiParbat/to-do-list-app",
      webapp: "https://to-do-list-app-a9b0f.web.app/",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "Developed a responsive weather application using HTML, CSS, and JavaScript that displays real-time weather data through an API. The app provides accurate information such as temperature, weather conditions, and location details. Designed a clean and user-friendly interface for easy interaction. Implemented responsive design to ensure compatibility across devices. This project demonstrates effective use of APIs and dynamic data handling.",
      image: WeatherAppLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/SakshiParbat/weather-project",
      webapp: "https://weather-project-721c5.web.app/",
    },
    {
      id: 6,
      title: "Balloon-Pop-Game",
      description:
        "Developed an interactive Balloon Pop Game using HTML, CSS, and JavaScript with engaging gameplay features. The game includes dynamic balloon generation, score tracking, and a timer-based challenge. Implemented smooth DOM manipulation and event handling for real-time interactions. Designed a responsive and user-friendly interface for better experience across devices. This project highlights strong understanding of JavaScript fundamentals and interactive UI design.",
      image: BalloonPopGameLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/SakshiParbat/balloon-pop-game",
      webapp: "https://balloon-pop-game-e92ff.web.app/",
    },
    {
      id: 7,
      title: "Dash UI",
      description:
        "Developed a modern and responsive finance dashboard using React.js with a clean and intuitive user interface. The dashboard features interactive components for data visualization and user engagement. Implemented reusable components to ensure scalability and maintainability. Deployed the application on Firebase for reliable hosting and performance. This project demonstrates strong skills in UI design, React development, and building dynamic web applications.",
      image: DashUILogo,
      tags: ["React JS", "Vite", "HTML", "Tailwind CSS", "Javascript", "Firebase Hosting"],
      github: "https://github.com/SakshiParbat/Dash-UI",
      webapp: "https://dash-ui-40531.web.app/",
    },
  ];  