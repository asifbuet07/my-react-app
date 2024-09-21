import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Hello Asif! Welcome to React.</h2>
      <Person></Person>
    </>
  );
}

function Person() {
  let person = {
    name: "Asif",
    age: 34,
  };

  return (
    <div>
      <p>
        Your name is: {person.name} and age is: {person.age}
      </p>
      <h3>Best of Luck!</h3>
    </div>
  );
}

export default App;
