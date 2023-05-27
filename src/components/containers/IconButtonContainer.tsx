import React, { ReactNode } from "react";
import { formatDoc } from "../../services/command";
import styles from "./IconButtonContainerStyle.module.css";

export const IconButtonContainer = ({
  action,
  children,
}: {
  action?: string;
  children: ReactNode;
}) => {
  const runAction = () => {
    if (action) formatDoc(action);
  };
  return (
    <button className={styles.holder} onClick={runAction}>
      {children}
    </button>
  );
};
