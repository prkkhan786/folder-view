import React from "react";
import TreeRecursive from "./TreeRecursive";

export default function Tree({ data }) {
  return (
    <div className="tree">
      <TreeRecursive data={data} />
    </div>
  );
}
