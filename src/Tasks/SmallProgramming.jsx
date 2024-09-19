import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChildComponent = ({ id }) => {
  return <div>Child Component {id}</div>;
};

const SmallProgramming = () => {
  const records = ["Task1", "Task2", "Task3"];
  const [para, setPara] = useState("This is Task1 of react");
  const [isVisible, setIsVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [text, setText] = useState("");
  const [children, setChildren] = useState([]);
  const [sum, setSum] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const visiblity = () => {
    if (isVisible) {
      setPara("");
      setIsVisible(false);
    } else {
      setPara("This is Task1 of react");
      setIsVisible(true);
    }
  };

  const addChildComponent = () => {
    setChildren([...children, children.length + 1]);
  };

  useEffect(() => {
    setSum(Number(value1) + Number(value2));
  }, [value1, value2]);

  return (
    <>
      <div>
        <h1>Here is the simple jsx</h1>
        <p>Rohit Jain</p>
        <h2>Here is an array of records </h2>
        {
          <ul>
            {records.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        }
      </div>
      <hr />

      <div>
        <h1>Here is the enable disable button</h1>
        <p>{para}</p>
        <button onClick={visiblity} style={{ cursor: "pointer" }}>
          Click here to {isVisible ? "hide" : "show"}
        </button>
      </div>
      <hr />
      <div>
        <h1>Here is the enable disable button</h1>
        <button disabled={isButtonVisible}>I am button</button>
        <button onClick={() => setIsButtonVisible(!isButtonVisible)}>
          Cick here to {isButtonVisible ? "Diable" : "Enable"}{" "}
        </button>
      </div>
      <hr />
      <div>
        <h1>Here is the Two way data binding</h1>
        <input
          type="text"
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
        />
        <p>Input: {text}</p>
      </div>
      <hr />
      <div>
        <h1>Here is dynamic add child component</h1>
        <button onClick={addChildComponent}>Click to add child</button>
        <div>
          {children.map((childId) => (
            <ChildComponent key={childId} id={childId} />
          ))}
        </div>
      </div>
      <hr />
      <div>
        <h1>Here is sum of two numbers</h1>
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
        <p>Sum : {sum}</p>
      </div>
      <hr />
      <Link to={"/task2"}>Click here to move on task-2</Link>
    </>
  );
};

export default SmallProgramming;
