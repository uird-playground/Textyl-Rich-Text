import React, { ReactNode } from "react";
// import "./PopoverStyle.css";

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
      <style jsx>{`
        .textyle_popover-container {
          position: relative;
        }

        .textyle_popover-container .popover {
          all: unset;
          display: none;
          position: absolute;
          padding: 8px 12px;
          background-color: black;
          color: white;
          top: 100%;
          left: 0;
          border-radius: 6px;
          font-size: 14px;
          white-space: pre;
          margin-top: 5px;
          font-family: sans-serif;
          z-index: 999;
        }

        .textyle_popover-container:hover .popover {
          display: block;
        }

        .textyle_popover-container .popover:before {
          content: "";
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid black;
          position: absolute;
          top: -4px;
        }
      `}</style>
    </div>
  );
}
