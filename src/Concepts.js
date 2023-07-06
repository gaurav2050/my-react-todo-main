import Concept from "./Concept.js";
export default function Concepts(props) {
  return (
    <ul id="concepts">
      {props.data.map((item) => (
        <Concept details={item} />
      ))}
    </ul>
  );
}
