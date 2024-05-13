import Revupway from "../../assets/project_images/revupway.png";
import Eventify from "../../assets/project_images/eventify.png";
import DriveSync from "../../assets/project_images/driveSync.png";
import Dashboard from "../../assets/project_images/dashboard.png";
import TemplateThree from "../../assets/project_images/template-three.png";
import Gamer from "../../assets/project_images/gamer.png";
import Kasper from "../../assets/project_images/kasper.png";
import SpecialDesign from "../../assets/project_images/special-design.png";
import Pagination from "../../assets/project_images/pagination.png";
import Pokemon from "../../assets/project_images/pokemon.png";

export const projectsData = [
  {
    title: "Revupway",
    description:
      "Revupway is a website I developed to demonstrate my skills in web design and development. It serves as a dynamic platform showcasing various digital marketing services. This project highlights my ability to deliver modern, user-friendly websites tailored to specific business needs.",
    imgUrl: Revupway,
    githubUrl: "https://github.com/Oussama-hamdi/revupway",
    liveUrl: "https://revupway.surge.sh/",
    techStack: ["React", "Css3", "Bootstrap5", "AnimationsOnScroll"],
    livePreview: true,
  },
  {
    title: "Eventify",
    description:
      "Eventify was a collaborative effort among our team of 3 during our time in the ALX Software Engineering program. Together, we developed an event platform aimed at fostering community engagement and innovation",
    imgUrl: Eventify,
    githubUrl: "https://github.com/AhmedElSaeedTalat/Eventify-Platform",
    liveUrl: undefined,
    techStack: [
      "ReactJs",
      "React Router",
      "Redux Toolkit",
      "redux Persist",
      "Bootstrap5",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
    ],
    livePreview: false,
  },
  {
    title: "Dashboard Clone",
    description:
      "I cloned a multi-page dashboard as part of my learning journey, which served as a foundation for creating my own custom CSS framework. This project allowed me to delve deep into CSS details while honing my skills in front-end development and design.",

    imgUrl: Dashboard,
    githubUrl: "https://github.com/Oussama-hamdi/dashboard",
    liveUrl: "https://oussama-hamdi.github.io/dashboard/",
    techStack: ["Html5", "Css3", "JavaScript"],
    livePreview: true,
  },
  {
    title: "DriveSync",
    description:
      "DiveSync: Car Rental Management System was a collaborative project developed as part of my ALX journey. This system streamlined car rental operations, emphasizing efficient management and user-friendly interfaces. As a team, we implemented innovative solutions to enhance the car rental experience for both customers and administrators.",
    imgUrl: DriveSync,
    githubUrl: "https://github.com/Oussama-hamdi/DriveSync",
    liveUrl: undefined,
    techStack: [
      "ReactJs",
      "React Router",
      "React Datetime Picker",
      "Node",
      "Express",
      "MongoDB",
    ],
    livePreview: false,
  },
  {
    title: "Solid Carnival",
    description:
      "In this project, I cloned a website to gain a deeper understanding of its design and functionality. Through this process, I dissected the website's structure, styles, and interactions, allowing me to enhance my skills in front-end development. Cloning this website provided valuable insights into industry best practices and served as a practical exercise to expand my knowledge and expertise in web development.",
    imgUrl: TemplateThree,
    githubUrl: "https://github.com/Oussama-hamdi/solid-carnival",
    liveUrl: "https://oussama-hamdi.github.io/solid-carnival/",
    techStack: ["Html5", "Css3", "JavaScript"],
    livePreview: true,
  },
  {
    title: "Gamer",
    description:
      "Gamer is a UI-focused project showcasing sleek design and captivating hovering effects. With a focus on creating an engaging user experience.",
    imgUrl: Gamer,
    githubUrl: "https://github.com/Oussama-hamdi/The-Gamer",
    liveUrl: "https://oussama-hamdi.github.io/The-Gamer/",
    techStack: ["Html5", "Css3", "JavaScript"],
    livePreview: true,
  },
  {
    title: "Kasper",
    description:
      "Kasper is a PSD to HTML project where I converted a design concept into a fully functional website. This project involved meticulous attention to detail as I translated the PSD file into clean, semantic HTML code. Through Kasper, I honed my skills in front-end development, ensuring pixel-perfect accuracy and responsiveness across various devices.",
    imgUrl: Kasper,
    githubUrl: "https://github.com/Oussama-hamdi/HTML-CSS-Template-One",
    liveUrl: "https://oussama-hamdi.github.io/HTML-CSS-Template-One/",
    techStack: ["Html5", "Css3", "JavaScript"],
    livePreview: true,
  },
  {
    title: "Special Template",
    description:
      "Special Template is a project where I utilized HTML5, CSS3, and JavaScript to create a dynamic website template. With a strong emphasis on JavaScript functionality, this project features user preferences such as color selection and toggling options like displaying or hiding bullet links. Additionally, the project includes functionality to store user preferences, ensuring a consistent experience even after reloading the page. Through Special Template, I explored the power of JavaScript to enhance user experience and create interactive web solutions tailored to individual preferences.",
    imgUrl: SpecialDesign,
    githubUrl: "https://github.com/Oussama-hamdi/Special-Template",
    liveUrl: "https://oussama-hamdi.github.io/Special-Template/",
    techStack: ["Html5", "Css3", "JavaScript"],
    livePreview: true,
  },
  {
    //Update the project so when i reach the end of pagination i will disable the next button and when i reach the first page i will disable the previous button
    title: "Pagination",
    description:
      "This project is a simple product pagination implemented in React, utilizing an API for fetching product data.",
    imgUrl: Pagination,
    githubUrl: "https://github.com/Oussama-hamdi/react-product-pagination",
    liveUrl: "https://react-product-pagination.surge.sh/",
    techStack: ["React", "API", "Css3"],
    livePreview: true,
  },
  {
    title: "Pokemon Finder",
    description:
      "This project is a simple Pokémon finder allowing users to search for Pokémon by name or element. Users can click on a Pokémon to view its details, including a stats graph. Through this project, I gained experience in integrating API data and creating dynamic user interfaces to enhance the browsing experience.",
    imgUrl: Pokemon,
    githubUrl: "https://github.com/Oussama-hamdi/pokeapi-nextjs-app",
    liveUrl: undefined,
    techStack: ["NextJs", "Styled-component", "React-ApexCharts"],
    livePreview: false,
  },
];
