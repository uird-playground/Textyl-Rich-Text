import React, { ReactNode } from "react";
import "./PopoverStyle.css";

export default function Popover({
  children,
  text,
}: {
  children: ReactNode;
  text?: string;
}) {
  return (
    <div className="textyle_popover-container">
      {children}
      {text && <div className="popover">{text}</div>}
    </div>
  );
}
