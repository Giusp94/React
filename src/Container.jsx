import { useState } from "react";
import "./Container.css";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleShowParagraph() {
    setCollapsed((c) => (c === false ? (c = true) : (c = false)));
  }
  return (
    <div>
      <div className="title" onClick={handleShowParagraph}>
        {title}
      </div>
      <div className={collapsed === false ? "dn" : "db"}>{children}</div>
    </div>
  );
}

/*
Create a Container component that renders its children within a div tag.
Have the div tag use a white background and a red border.
Add a title prop that will contain the title value to be displayed before the children.
Make the container collapsible, so that when the title is clicked the children are either hidden of shown again.
Use the useState hook to keep track of the collapsed state.
*/
