import { FaGithub } from "react-icons/fa";
import whitespaceImg from '/images/Whitespace.png';
import eCommerceImg from '/images/e-commerce.png';
import bootstrapImg from '/images/hero.jpg';
// import project4Img from '/images/Nexcent.png';
// import project5Img from '/images/Portfolio.png';
// import project6Img from '/images/project6.png'; // Replace with actual image path

const projects = [
  {
    title: "Todo App",
    description: "A simple and responsive TODO app built with plain HTML, CSS, and JavaScript, focusing on easy task management and clean user interface.",
    image: whitespaceImg,
    link: "https://todo-app-red-pi-41.vercel.app/",
    github: "https://github.com/iabdulmanan10/todo-app",
  },
  {
    title: "E-Commerce Store",
    description: "A simple and responsive e-commerce store built with HTML and CSS, featuring product listings, clean design, and easy navigation.",
    image: bootstrapImg,
    link: "https://e-commerce-store-mu-rosy.vercel.app/",
    github: "https://github.com/iabdulmanan10/e-commerce-store",
  },
  {
    title: "Bootstrap Template",
    description: "A responsive and modern website template built with Bootstrap, featuring a clean layout, mobile-first design, and ready-to-use components.",
    image: bootstrapImg,
    link: "https://bootstrap-project-iota-five.vercel.app/",
    github: "https://github.com/iabdulmanan10/bootstrap-project",
  },
  // {
  //   title: "Agency Website",
  //   description: "A fast, responsive agency website built with Vite, React, and Tailwind CSS to showcase services, clients, and impactful solutions.",
  //   image: project4Img,
  //   link: "https://agency-website-q8c3c4fw8-zain-arifs-projects.vercel.app/",
  //   github: "https://github.com/Zain-Arif2/Agency-Website",
  // },
  // {
  //   title: "Portfolio Website",
  //   description: "A clean and responsive portfolio website built with React and plain CSS to highlight projects, skills, and personal achievements.",
  //   image: project5Img,
  //   link: "https://portfolio-website-gray-theta.vercel.app/",
  //   github: "https://github.com/Zain-Arif2/Portfolio-Website",
  // },
  // {
  //   title: "Project 6",
  //   description: "Description of Project 6.",
  //   // image: project6Img,
  //   link: "#",
  //   github: "#",
  // },
];

export default function Projects() {
  return (
    <section
    id="projects"
    className="bg-[#1A1E23] text-white pt-[60px] pb-[60px] sm:pt-[150px] sm:pb-[150px] px-4 sm:px-6 lg:px-38"
  >
  
  <div className="text-center mb-12 px-4 sm:px-6 lg:px-0">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#12F7D6] font-bold">
    My Projects
  </h2>
  <p className="text-white mt-2 text-base sm:text-lg lg:text-xl">
    Things I've built so far
  </p>
</div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#292F36] rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold underline underline-offset-4">{project.title}</h3>
            <p className="mt-2 text-base text-gray-300">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white"
              >
                View Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <FaGithub className="text-xl" />  
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
