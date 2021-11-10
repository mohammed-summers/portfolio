import "./projectitem.css";

import React from "react";

const ProjectItem = ({ img, link, desc, title }) => {
  return (
    <div className="project-item">
      <div className="project-browser">
        <div className="project-circle"></div>
        <div className="project-circle"></div>
        <div className="project-circle"></div>
      </div>

      <div className="project-container">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <img src={img} alt={title} className="project-img" />
        </a>

        <p1 className="project-title">{title}</p1>
        <p className="project-desc">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
