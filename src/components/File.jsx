import React from "react";
import { AiOutlineFile } from "react-icons/ai";

export default function File({ name }) {
  return (
    <div className="file">
      <AiOutlineFile />
      <span>{name}</span>
    </div>
  );
}
