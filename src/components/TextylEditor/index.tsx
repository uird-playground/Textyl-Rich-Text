import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.css";

export default function TextylEditor({
  placeholder = "Start typing here...",
}: {
  placeholder?: string;
}) {
  const editor = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      document.execCommand("defaultParagraphSeparator", false, "p");
    }
  }, []);

  const onTouched = (e: any) => {
    if (editor.current && placeholderRef.current) {
      if (
        editor.current.innerText == placeholder ||
        editor.current.innerText.length == 0
      )
        placeholderRef.current.innerHTML = placeholder;
      else placeholderRef.current.innerHTML = "";
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={editor}
        className={styles.editor}
        contentEditable={true}
        spellCheck={false}
        onKeyUp={onTouched}
        id="textyl-editor"
      ></div>
      <div className={styles.placeholder} ref={placeholderRef}>
        {placeholder}
      </div>
    </div>
  );
}
