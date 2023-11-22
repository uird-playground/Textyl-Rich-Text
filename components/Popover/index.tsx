import React, { ReactNode } from "react";
import styles from "./PopoverStyle.module.css";

export default function Popover({
  children,
  text,
}: {
  children: ReactNode;
  text?: string;
}) {
  return (
    <div className={styles.container}>
      {children}
      {text && <div className={styles.popover}>{text}</div>}
    </div>
  );
}
