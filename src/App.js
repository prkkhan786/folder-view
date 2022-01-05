import "./App.css";
import React, { useState } from "react";
import Folder from "./components/Folder";
import File from "./components/File";

const FOLDER_DATA = {
  Folders: [
    { Name: "Project Management" },
    { Name: "Contracts" },
    {
      Name: "Engineering",
      Folders: [
        { Name: "Assets" },
        {
          Name: "Requirements",
          Folders: [
            {
              Name: "node_modules",
              Folders: [{ Name: "mongo" }, { Name: "react" }],
            },
            { Name: "modules" },
          ],
        },
      ],
    },
    { Name: "new added" },
  ],
};

const TreeRecursive = ({ data }) => {
  return data.map((item) => {
    if (item["Folders"] === undefined) {
      return <File name={item.Name} />;
    }
    if (item["Folders"] !== undefined) {
      return (
        <Folder name={item.Name}>
          <TreeRecursive data={item.Folders} />
        </Folder>
      );
    }
  });
};
const Tree = ({ data }) => {
  return (
    <div className="tree">
      <TreeRecursive data={data} />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Tree data={FOLDER_DATA["Folders"]} />
    </div>
  );
}
