import React from "react";

import inteli from "../assets/images/inteli.png";

import vscode from "../assets/images/vscode.png";

const Skills = () => {
  const techStack = [
    {
      category: "Frontend",
      skills: [
        { name: "Node.js", icon: "logo-nodejs" },
        { name: "React", icon: "logo-react" },
        { name: "JavaScript", icon: "logo-javascript" },
        { name: "Tailwind CSS", icon: "logo-css3" },
        { name: "Visual Studio Code", icon: vscode },
        { name: "Janus", icon: "logo-javascript" }, // Replace with correct icon if available
      ],
    },
    {
      category: "Database",
      skills: [
        {
          name: "MySQL",
          icon: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603423163/noticon/az0cvs28lm7gxoowlsva.png",
        },
      ], // Replace with correct icon if available
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Java",
          icon: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972500/noticon/htwpjnfc0hlr1teypbjo.png",
        },
        {
          name: "Spring Boot",
          icon: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566778017/noticon/ytjm1rralodyhvuggrpu.png",
        },
        { name: "IntelliJ IDEA", icon: inteli },
        {
          name: "Gradle",
          icon: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576325989/noticon/rcwm9dy0hu6cbjowbfwi.png",
        }, // Replace with correct icon if available
      ],
    },
    {
      category: "Deployment",
      skills: [
        { name: "DockerHub", icon: "logo-docker" },
        { name: "GitHub Actions", icon: "logo-github" },
        {
          name: "AWS EC2",
          icon: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566777755/noticon/yfmwxv8nhnr5aqaxhxpg.png",
        }, // Replace with correct icon if available
      ],
    },
    {
      category: "Communication",
      skills: [
        { name: "Git", icon: "logo-github" },
        {
          name: "Notion",
          icon: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570106347/noticon/hx52ypkqqdzjdvd8iaid.svg",
        },
        { name: "Google Drive", icon: "logo-google" },
      ],
    },
  ];

  return (
    <article className="resume active bg-gray-800  rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-4xl text-white-2 font-semibold mb-4">Skills</h2>
      </header>
      <section className="tech-stack mt-10">
        <div className="space-y-8">
          {techStack.map((category) => (
            <div key={category.category}>
              <h4 className="text-4xl text-white-2 font-medium mb-4">
                {category.category}
              </h4>
              <ul className="flex flex-wrap space-x-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center space-x-2 mb-4"
                  >
                    {typeof skill.icon === "string" &&
                    skill.icon.startsWith("logo-") ? (
                      <ion-icon
                        name={skill.icon}
                        class="text-3xl text-white-2"
                      ></ion-icon>
                    ) : (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8"
                      />
                    )}
                    <span className="text-3xl text-white-2">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Skills;
