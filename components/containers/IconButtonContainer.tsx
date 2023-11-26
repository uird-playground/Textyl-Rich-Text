import React, { ReactNode } from "react";
import { formatDoc } from "../../services/command";
import "./IconButtonContainerStyle.css";
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
    </Popover>
  );
};
