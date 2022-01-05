import React, { useState } from "react";
import { AiOutlineFile,AiOutlineFolder } from "react-icons/ai";

export default function Folder({ name, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  let classname = "";
  if (isOpen) {
    classname = "show";
  } else {
    classname = "hide";
  }
  return (
    <div className="folder">
      <div className="folder--label" onClick={handleToggle}>
        <AiOutlineFolder />
        <span>{name}</span>
      </div>

      <div className={classname} isOpen={isOpen}>
        {children}
      </div>
    </div>
  );
}
