import React, { useEffect, useState } from "react";

// import Footer from "./foooter";
import '../../src/assets/css/Services.css';
import Modal from "./Modal";
import Team from "../assets/images/done/team.jpg";
import zakaria from './picdev/zakaria2.svg';
import zakaria2 from './picdev/zakaria.svg';
import omar from './picdev/omar.svg';
import mostafa from "./picdev/mostafa.svg";
import ayoub from "./picdev/ayoub.svg";
import kamal from "./picdev/kamal.svg";
import annas from "./picdev/anass.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// Directly import the English translations
import { DevelopmentEN } from './locales/en/page';

const teamMembers = [
  {
    id: 1,
    name: "ENNACHOUM ZAKARIA",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "SQL"],
    photo: zakaria2,
    details:
      "Zakaria is an experienced developer with a focus on building scalable web applications. He enjoys working with the latest technologies and frameworks to create efficient and maintainable solutions.",
    github: "https://github.com/Umbrator",
    linkedin: "https://www.linkedin.com/in/ennachoum-zakaria-264134231/",
  },
  {
    id: 2,
    name: "BAOUALI ZAKARIA",
    role: "Full Stack Developer",
    skills: ["React", "Tailwind CSS", "Sass"],
    photo: zakaria,
    details:
      "ZAKARIA specializes in both front-end and back-end development, ensuring that every aspect of our applications is seamless and efficient.",
    github: "https://github.com/ZAKARYA123J",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Omar Elkaddouri ",
    role: "Full Stack Developer",
    skills: ["Laravel", "Spring", "SQL"],
    photo: omar,
    details: "",
    github: "https://github.com/john-doe",
    linkedin: "https://linkedin.com/in/john-doe",
  },
  {
    id: 4,
    name: "MOSTAFA LHWARI",
    role: "Full Stack Developer",
    skills: ["Figma", "Sketch", "Adobe XD"],
    photo: mostafa,
    details: "",
    github: "https://github.com/jane-smith",
    linkedin: "https://linkedin.com/in/jane-smith",
  },
  {
    id: 5,
    name: "AYOUB BOUNAGA",
    role: "Full Stack Developer",
    skills: ["Figma", "Sketch", "Adobe XD"],
    photo: ayoub,
    details: "",
    github: "https://github.com/jane-smith",
    linkedin: "https://linkedin.com/in/jane-smith",
  },
  {
    id: 6,
    name: "KAMAL ",
    role: "Full Stack Developer",
    skills: ["Figma", "Sketch", "Adobe XD"],
    photo: kamal,
    details: "",
    github: "https://github.com/jane-smith",
    linkedin: "https://linkedin.com/in/jane-smith",
  },
  {
    id: 7,
    name: "ANASS",
    role: "Full Stack Developer",
    skills: ["Figma", "Sketch", "Adobe XD"],
    photo: annas,
    details: "",
    github: "https://github.com/jane-smith",
    linkedin: "https://linkedin.com/in/jane-smith",
  },
];

const TeamPage = React.memo(() => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [developpement, setSdeveloppment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      setLoading(true);
      try {
        // Directly set the development data
        setSdeveloppment(DevelopmentEN);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="flex-grow pt-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-10 animate-fadeIn">
          {developpement.map((skill, idx) => (
            <div key={idx}>
              <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight">
                {skill.title} {/* Directly using imported data */}
              </h1>
              <img
                src={Team}
                alt="Team"
                className="w-full h-80 object-cover rounded-lg mb-12 shadow-md animate-zoomIn"
              />
              <section className="mb-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                  <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight animate-fadeIn">
                    {skill.title2} {/* Directly using imported data */}
                  </h2>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skill.services?.map((service, index) => (
                      <div
                        key={index}
                        className="relative group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                          <div className="text-4xl mr-4 transition-transform duration-300 group-hover:scale-110">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-red-600">
                            {service.title} {/* Directly using imported data */}
                          </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-500 transition-colors duration-300">
                          {service.description} {/* Directly using imported data */}
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Team Members Section */}
              <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-10">
                <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight">
                  Our Team Members
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 animate-slideUp">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                    >
                      <div className="flex flex-col items-center">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200 dark:border-gray-700 animate-bounce"
                        />
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {member.name}
                        </h2>
                        <p className="text-blue-600 font-medium mt-1">
                          {member.role}
                        </p>
                        <div className="flex justify-center mt-2">
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-300 mx-2"
                          >
                            <FaGithub size={20} />
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-300 mx-2"
                          >
                            <FaLinkedin size={20} />
                          </a>
                        </div>
                        <button
                          onClick={() => openModal(member)}
                          className="mt-4 text-white bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-lg px-4 py-2"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <Footer /> */}
      {selectedMember && (
        <Modal member={selectedMember} onClose={closeModal} />
      )}
    </div>
  );
});

export default TeamPage;
