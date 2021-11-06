import React, { useState } from "react";

function App() {
  const [task, setinput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setinput(newValue);
  }
  function handleClick() {
    setItems((prev) => {
      return [...prev, task];
    });
    setinput("");
  }

  function traver(item) {
    return <li>{item}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={task} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{items.map(traver)}</ul>
      </div>
    </div>
  );
}

export default App;
