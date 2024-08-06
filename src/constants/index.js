import {
    mobile,
    backend,
    web,
    javascript,
    java,
    spring,
    python,
    ruby,
    rubyonrails,
    reactjs,
    tailwind,
    nodejs,
    postgresql,
    mongodb,
    git,
    nuscomputing,
    csit,
    veggies,
    pushup
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Security Enthusiast",
      icon: mobile,
    },
    {
      title: "Code For Public Good",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Java",
      icon: java,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "Ruby on Rails",
      icon: rubyonrails,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Undergraduate Teaching Assistant",
      company_name: "NUS Computing",
      icon: nuscomputing,
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
        "Currently teaching a core Computer Science module, CS2106 Introduction to Operating Systems for academic year 2024-2025.",
        "Taught IS1108 Digital Ethics and Data Privacy in academic year 2023-2024.",
        "Received teaching feedback score of 4.4 out of 5, higher than the average teaching score in the School of Computing, NUS."
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Centre for Strategic Infocomm Technologies (CSIT)",
      icon: csit,
      iconBg: "#E6DEDD",
      date: "May 2024 - August 2024",
      points: [
        "Did full stack web and mobile development in the Software Engineering department.",
        "Utilised front-end frameworks (ReactJS & Jetpack Compose) and back-end frameworks (Spring) to develop features and microservices.",
        "Dealt with NoSQL data management tools (MongoDB).",
      ],
    },
  ];
  
  const projects = [
    {
      name: "VeGGies",
      description:
        "An e-comm web application built using Ruby on Rails, along with the Hotwire framework and Stripe payment API.",
      tags: [
        {
          name: "RubyOnRails",
          color: "text-red-600",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: veggies,
      source_code_link: "https://github.com/SelwynAng/ecomm-site",
    },
    {
      name: "Knock It Down",
      description:
        "Web application that helps National Service men pefect their push-up form through real-time feedback.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "MachineLearning",
          color: "pink-text-gradient",
        },
      ],
      image: pushup,
      source_code_link: "https://devpost.com/software/knock-it-down",
    },
  ];

  const links = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/selwyn-ang/"
    },
    {
      name: "GitHub",
      link: "https://github.com/SelwynAng"
    },
  ]
  
  export { services, technologies, experiences, projects, links };