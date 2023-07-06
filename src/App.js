import keyConceptsImage from "./assets/images/key-concepts.png";
// import stateImage from "./assets/images/state.png";
// import eventsImage from "./assets/images/events.png";
import Concepts from "./Concepts.js";

const concepts = [
  {
    title: "JSX",
    image: "jsxImage",
    description:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It allows you to define the structure and content of React components in a more declarative manner.",
  },
  {
    title: "State",
    image: "stateImage",
    description:
      "State represents the data that changes over time in a React component. It is managed using the useState hook or the this.state mechanism in class components. When the state is updated, React re-renders the component to reflect the new state.",
  },
  {
    title: "Props",
    image: "propsImage",
    description:
      "Props (short for properties) are used to pass data from a parent component to its child components. Props are read-only, meaning that the child component cannot modify the props passed to it.",
  },
  {
    title: "Lifecycle Methods (Class Components)",
    image: "lifecycleMethodsImage",
    description:
      "Class components have a set of lifecycle methods that allow you to hook into different stages of a component's lifecycle, such as mounting, updating, and unmounting. Some commonly used lifecycle methods are componentDidMount, componentDidUpdate, and componentWillUnmount.",
  },
  {
    title: "Hooks",
    image: "hooksImage",
    description:
      "Hooks are functions that allow you to use React features like state and lifecycle methods in functional components. They provide a way to reuse stateful logic without using class components. Some popular hooks are useState, useEffect, and useContext.",
  },
  {
    title: "Conditional Rendering",
    image: "conditionalRenderingImage",
    description:
      "React allows you to render different content based on certain conditions. You can use conditional statements like if or the ternary operator (condition ? trueBlock : falseBlock) to conditionally render elements.",
  },
  {
    title: "Event Handling",
    image: "eventHandlingImage",
    description:
      "React provides a synthetic event system that normalizes the differences in how browsers handle events. You can attach event handlers to DOM elements using JSX, and React ensures that the events are handled consistently across different browsers.",
  },
  {
    title: "Forms",
    image: "formsImage",
    description:
      "React provides a controlled component pattern for handling form inputs. In this pattern, the form element's value is controlled by React state, and the event handlers update the state, thus keeping the form and state in sync.",
  },
  {
    title: "React Router",
    image: "reactRouterImage",
    description:
      "React Router is a popular library for handling routing in React applications. It allows you to define different routes and map them to different components, enabling navigation between different parts of the application.",
  },
  {
    title: "Variables",
    image: "variablesImage",
    description:
      "Variables are used to store data values in JavaScript. They can hold various types of data such as numbers, strings, objects, and more. Variables are declared using the 'var', 'let', or 'const' keyword.",
  },
  {
    title: "Data Types",
    image: "dataTypesImage",
    description:
      "JavaScript has several built-in data types, including numbers, strings, booleans, objects, arrays, functions, and more. Understanding data types is essential for working with and manipulating data in JavaScript.",
  },
  {
    title: "Functions",
    image: "functionsImage",
    description:
      "Functions in JavaScript are reusable blocks of code that can be invoked or called to perform a specific task. They can accept parameters, return values, and can be assigned to variables or passed as arguments.",
  },
  {
    title: "Control Flow",
    image: "controlFlowImage",
    description:
      "Control flow statements in JavaScript, such as if-else statements, switch statements, and loops (e.g., for, while, do-while), allow you to control the execution flow of your code based on different conditions.",
  },
  {
    title: "Arrays",
    image: "arraysImage",
    description:
      "Arrays in JavaScript are used to store multiple values in a single variable. They can hold values of different data types and provide various methods and properties to manipulate and access the data stored in them.",
  },
  {
    title: "Objects",
    image: "objectsImage",
    description:
      "Objects in JavaScript are collections of key-value pairs. They allow you to store and organize related data and functions. Objects can have properties (data) and methods (functions) associated with them.",
  },
  {
    title: "Scope",
    image: "scopeImage",
    description:
      "Scope determines the accessibility and visibility of variables in JavaScript. Variables can have either global scope or local scope, depending on where they are declared and used within the code.",
  },
  {
    title: "Error Handling",
    image: "errorHandlingImage",
    description:
      "Error handling in JavaScript involves handling and managing runtime errors that may occur during the execution of your code. This can be done using try-catch statements to catch and handle exceptions.",
  },
  {
    title: "Asynchronous Programming",
    image: "asyncProgrammingImage",
    description:
      "JavaScript supports asynchronous programming through concepts such as callbacks, promises, and async/await. Asynchronous code allows non-blocking execution, making it possible to handle tasks such as API requests and file I/O efficiently.",
  },
  {
    title: "ES6+ Features",
    image: "es6FeaturesImage",
    description:
      "ES6 (ECMAScript 2015) introduced many new features and enhancements to JavaScript. These include arrow functions, template literals, destructuring assignments, spread and rest operators, and more, which enhance code readability and productivity.",
  },
];

function App() {
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <div className="completionDetail">{26}% Completed </div>
      <Concepts data={concepts} />
    </div>
  );
}

export default App;
