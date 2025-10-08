import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const projectObj = [
    
    {
      id: 1,
      imgURL: "/project-1.png.png",
      projectName: "EB-Calculator",
      liveLink: "https://ebcalculatorchart.netlify.app/",
      codeLink: "https://github.com/thamim050505/EB-Calculator.git",
      title: "Techniques to Reduce Electricity Bill",
      abt: " This website project is an interactive platform that helps users to calculate their electricity bills and gets tips for reducing electricity consumption to save money. This website includes a custom electricity bill calculator, and electricity unit per rate table, and a techniques and ideas to reduce electricity consumption.",
    },
    {
      id: 2,
      imgURL: "/project-2.png.png",
      projectName: "Image-Vault",
      liveLink: "",
      codeLink: "https://github.com/thamim050505/Image_vault.git",
      title: "Image Vault",
      abt: "Developed the frontend of dynamic image vault web application from scratch, focusing on user experience and performance. Implemented search and filter functionalities to allow users to find images easily and sort them by categories. Added image like and image downloading feature,enabled users to save their favorite images directly from the gallery.Ensured the website supports endless scrolling and pagination for a seamless user experience",
    },
  ];
  return (
    <>
      <div className="project">
        <h1>
          <span>My</span> Projects
        </h1>

        <div className="project__inner">
          
            {projectObj.map((project) => {
              return (
                <div className=" pro">
                  <div
                    className="project-card"
                    
                  >
                    <img src={project.imgURL} alt="" />
                    <h2>{project.projectName}</h2>
                    <div className="project-view ">
                      <Link
                        target="blank"
                        to={project.liveLink}
                      >
                        <button>Go Live</button>
                      </Link>
                      <Link
                        target="blank"
                        to={project.codeLink}
                      >
                        <button>View Code</button>
                      </Link>
                    </div>
                    <div className="project-detail ">
                      <b>{project.title}</b>
                      <p>
                       {project.abt}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      </>
  );
};

export default Project;