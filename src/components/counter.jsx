import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p className="tacenter">{counter}</p>
      <div className="df jcspace">
        <button
          className="btn btn-success"
          onClick={() => {
            setCounter((prevCounter) => +prevCounter + 1);
          }}
        >
          increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setCounter((prevCounter) => +prevCounter - 1);
          }}
        >
          decrement
        </button>
      </div>
    </>
  );
};
