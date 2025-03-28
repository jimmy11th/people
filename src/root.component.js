import React from "react";

export default function Root(props) {
  return (
    <>
      Warrior Trading
      <button
        onClick={() => {
          alert("clicked Warrior Trading");
        }}
      >
        Click me
      </button>
    </>
  );
}
