import React from "react";

function SimpleFunctionalComponent(props) {
  return (
    <div>
      <h1>Vite + React</h1>
      <h2>Student Info:</h2>
      <p>ID: {props.student.id}</p>
      <p>Teacher ID: {props.student.id2}</p>

    </div>
  );
}

export default SimpleFunctionalComponent;