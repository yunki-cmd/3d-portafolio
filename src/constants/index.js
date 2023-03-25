import {
  mobile,
  backend,
  web,
  vue,
  testing,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  threejs,
  ArrowFood,
  ArrowFoodApiRest,
  giphy,
  Jump,
  minsait
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Vue Developer",
    icon: vue,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "QA Automatization",
    icon: testing,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Practices in Jump",
    company_name: "JUMP",
    icon: Jump,
    iconBg: "#383E56",
    date: "April 2021 - Jun 2021",
    points: [
      "Using languages such as Scala and Amazon Query to detect inconsistencies in data"
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: minsait,
    iconBg: "#E6DEDD",
    date: "October 2021 - Present",
    points: [
      "Creating open source solutions for automated testing using Selenium Grid and Appium.",
      "Development of a web application using Vue.js 2 and Spring Boot backend.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Arrow Food",
    description:
      "A restaurant website built using JavaScript, CSS, and HTML, combined with Bootstrap 5 technology and Ajax on the frontend. On the backend, there is a REST API that manages emails, users, and reservations using Node.js",
    tags: [
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Html5",
        color: "pink-text-gradient",
      },
    ],
    image: ArrowFood,
    source_code_link: "https://github.com/yunki-cmd/arrowfood",
    page_web_url:'https://giphy.com/gifs/LM70LNp9IXysTaTG4U/fullscreen'
  },
  {
    name: "Api ArrowFood",
    description:
      "A REST API that manages registrations, logins, reservations, and emails for the ArrowFood website.",
    tags: [
      {
        name: "Mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Nodeemail",
        color: "pink-text-gradient",
      },
    ],
    image: ArrowFoodApiRest,
    source_code_link: "https://github.com/yunki-cmd/api-arrowfod",
    page_web_url:'https://giphy.com/gifs/LM70LNp9IXysTaTG4U/fullscreen'
  },
  {
    name: "Giffy",
    description:
      "A project by Midudev that applies all the functions contained in React, adapting the project and implementing its own API to add new features.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Api-rest",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: giphy,
    source_code_link: "https://github.com/yunki-cmd/mono-repository-gif",
    page_web_url:'https://giphy.com/gifs/LM70LNp9IXysTaTG4U/fullscreen'
  },
  {
    name: "Clone-Rawg",
    description:
      "A Rawg clone application has been developed using React and Tailwind CSS.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Api-rest",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/api-portafolio-87079.appspot.com/o/users%2F7OwyAlKeqaQcXjzflzMiXsrOS6b2%2Fimages%2Fclone-rawg.PNG?alt=media&token=fd332ab0-f81d-4146-9b5a-bca2162d78f8",
    source_code_link: "https://github.com/yunki-cmd/clone-rawg",
    page_web_url:'https://clone-rawg-yunki-cmd.vercel.app/'
  },
  {
    name: "Frontend Mentor - Order Summary",
    description:
      "Frontend-Mentor challenge for creating a responsive summary order card.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      }
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/api-portafolio-87079.appspot.com/o/users%2F7OwyAlKeqaQcXjzflzMiXsrOS6b2%2Fimages%2Freto-orderSummary.PNG?alt=media&token=4f0f7dce-65f2-4c7b-95f2-04017629f54a",
    source_code_link: "https://github.com/yunki-cmd/reto-frontedMento-orderSummaryComponent",
    page_web_url:'https://yunki-cmd.github.io/reto-frontedMento-orderSummaryComponent/'
  },
  {
    name: "Frontend Mentor - Card Social",
    description:
      "Frontend-Mentor challenge for creating a responsive social card.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/api-portafolio-87079.appspot.com/o/users%2F7OwyAlKeqaQcXjzflzMiXsrOS6b2%2Fimages%2Freto-cardSocial.PNG?alt=media&token=34338b39-abf5-4087-acd0-c5c8899b5abd",
    source_code_link: "https://github.com/yunki-cmd/retofrontedMento-SocialproofCard.git",
    page_web_url:'https://yunki-cmd.github.io/retofrontedMento-SocialproofCard/'
  },
  {
    name: "Dashboard-Time-Tracking",
    description:
      "Frontend-Mentor challenge for creating a responsive time dashboard.",
    tags: [
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/api-portafolio-87079.appspot.com/o/users%2F7OwyAlKeqaQcXjzflzMiXsrOS6b2%2Fimages%2Fdashboard-time-tracking.jpg?alt=media&token=57dab917-2d38-47c1-825c-2708d91abf8d",
    source_code_link: "https://github.com/yunki-cmd/dashboard-time-tracking",
    page_web_url:'https://yunki-cmd.github.io/dashboard-time-tracking/'
  },
  {
    name: "Rock-Paper-Scissors",
    description:
      "A rock-paper-scissors game has been developed using Vue 3. This game employs the popular hand game format, allowing the user to select their move and see real-time results. Vue 3 is a modern and powerful technology for web application development, ensuring a smooth and engaging user experience.",
    tags: [
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/api-portafolio-87079.appspot.com/o/users%2FPTI7Y23d1TQ5bU6fdXIV0grzkZ83%2Fimages%2Frock-paper-scissors.PNG?alt=media&token=64c9c11b-2ae2-49a2-971f-015902e156d1",
    source_code_link: "https://github.com/yunki-cmd/rock_paper_scissors",
    page_web_url:'https://rock-paper-scissors-six-iota.vercel.app/'
  },
  {
    name: "Interactive Card Details Form",
    description:
      "The form enables real-time updating of the card details.",
    tags: [
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/api-portafolio-87079.appspot.com/o/users%2FoCGQOaHcNsbUgcURTitJmtVhGfq1%2Fimages%2FnftCardBank.PNG?alt=media&token=7bf0ba1a-990d-486c-a36b-0687770ee886",
    source_code_link: "https://github.com/yunki-cmd/Reto-FrontedMentor/tree/interactive-card-details-form",
    page_web_url:'https://card-detail-form-interactive.netlify.app/'
  },
  
];

export { services, technologies, experiences, projects };
