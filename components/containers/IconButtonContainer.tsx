import React, { ReactNode } from "react";
import { formatDoc } from "../../services/command";
import Popover from "../Popover";

export const IconButtonContainer = ({
  action,
  children,
  popover,
}: {
  action?: string;
  children: ReactNode;
  popover?: string;
}) => {
  const runAction = () => {
    if (action) formatDoc(action);
  };
  return (
    <Popover text={popover}>
      <button className="textyle_icon-button-holder" onClick={runAction}>
        {children}
      </button>
      <style jsx>{`
        .textyle_icon-button-holder {
          background-color: transparent;
          border: none;
          border-radius: 6px;
          transition: background 0.3s ease-in;
          cursor: pointer;
          position: relative;
        }

        .textyle_icon-button-holder:hover {
          background-color: #eee;
        }

        .textyle_icon-button-holder .popover {
          display: none;
          position: absolute;
          padding: 8px 12px;
          background-color: black;
          color: white;
          top: 100%;
          left: 0;
          border-radius: 6px;
          font-size: 12px;
          white-space: pre;
          margin-top: 5px;
        }

        .textyle_icon-button-holder:hover .popover {
          display: block;
        }

        .textyle_icon-button-holder .popover:before {
          content: "";
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid black;
          position: absolute;
          top: -5px;
        }
      `}</style>
    </Popover>
  );
};
