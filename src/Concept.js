import React, { useState } from "react";
import componentsImage from "./assets/images/components.png";

export default function Concept(props) {
  const [checkBoxStatus, updateCheckBoxStatus] = useState(false);
  const [completionStatus, updateStatus] = useState("TODO");

  function checkActivity(event) {
    updateCheckBoxStatus(!checkBoxStatus);
    if (checkBoxStatus) {
      updateStatus("TODO");
    } else {
      updateStatus("Done");
    }
    props.onTopicCompletion(event.target.checked);
  }

  return (
    <li className="concept">
      <input type="checkbox" onChange={checkActivity}></input>
      <img src={componentsImage} alt={props.details.title} />
      <h2>{props.details.title}</h2>
      <p>{props.details.description}</p>
      <p> {completionStatus} </p>
    </li>
  );
}
