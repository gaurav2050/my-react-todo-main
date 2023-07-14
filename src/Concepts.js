import { useState } from "react";
import Concept from "./Concept.js";

export default function Concepts(props) {
  const [completedTopicsCount, updateCompletedTopicsCount] = useState("0");
  let totalTopicsCount = props.data.length;
  let completedTopicsCountTracker = completedTopicsCount;

  const topicCompletedHandler = (status) => {
    if (status === true) {
      completedTopicsCountTracker = Number(completedTopicsCountTracker) + 1;
      updateCompletedTopicsCount(completedTopicsCountTracker);
    } else {
      completedTopicsCountTracker = Number(completedTopicsCountTracker) - 1;
      updateCompletedTopicsCount(completedTopicsCountTracker);
    }
    props.onTopicsCompletion(Math.fround(completedTopicsCountTracker/totalTopicsCount).toPrecision(2));
  };

  return (
    <ul id="concepts">
      {props.data.map((item) => (
        <Concept details={item} onTopicCompletion={(status)=>topicCompletedHandler(status)} />
      ))}
    </ul>
  );
}
