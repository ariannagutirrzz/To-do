import React from "react";
import "../../styles/createButton.css";

function CreateButton({ setOpenModal }) {
  return (
    <div>
      <button
        className="createTask"
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      >
        +
      </button>
    </div>
  );
}

export { CreateButton };
