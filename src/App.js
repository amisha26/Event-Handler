import React, { Component, useState } from 'react';
import './App.css';

export default function App() {
  const [double, setDouble] = useState("Click Me");
  const [bgclr1, setBgclr1] = useState("lightblue");

  const [point, setPoint] = useState("Mouse Here");
  const [bgclr2, setBgclr2] = useState("lightpink");
  const singleClick = () => {
    setDouble("Double click me!");
    setBgclr1("lightyellow");
  };
  const doubleClick = () => {
    setDouble("Woo");
    setBgclr1("lightgreen");
  };
  const enter = () => {
    setPoint("Leave");
    setBgclr2("lightcoral");
  };
  const leave = () => {
    setPoint("Enter");
    setBgclr2("lightcyan");
  };
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <div style={{ backgroundColor: bgclr1 }}>
        <button onDoubleClick={doubleClick} onClick={singleClick}>
          {double}
        </button>
      </div>
      <div style={{ backgroundColor: bgclr2 }}>
        <button onMouseEnter={enter} onMouseLeave={leave}>
          {point}
        </button>
      </div>
    </div>
  );
}

