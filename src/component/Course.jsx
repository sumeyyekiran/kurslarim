import React from "react";

function Course({ course }) {
  const { id, title, description, time, link, image } = course;
  return (
    <div className="course">
      <img src={image} width={275} height={275} />
      <h4 className="titleStyle">{title}</h4>
      <p className="course-desc">{description}</p>
      <p className="course-time">{time}</p>
      <div className="course-link">
        <a style={{ textDecoration: "none" }} href={link}>
          Click to view
        </a>
      </div>
    </div>
  );
}

export default Course;
