import React from "react";

export default function TreeRecursive({ data }) {
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
}
