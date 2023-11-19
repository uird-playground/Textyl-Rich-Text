import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.css";

let timeout: ReturnType<typeof setTimeout>;

export default function TextylEditor({
  placeholder = "Start typing here...",
  onChange,
  initialValue,
}: {
  placeholder?: string;
  onChange?: (el: string) => void;
  initialValue?: string;
}) {
  const editor = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      if (initialValue && editor.current && placeholderRef.current) {
        placeholderRef.current.innerHTML = "";
        editor.current.innerHTML = initialValue;
      }
      document.execCommand("defaultParagraphSeparator", false, "p");
    }
  }, []);

  const refreshSave = (value: string) => {
    if (onChange) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(value);
      }, 1000);
    }
  };

  const onTouched = (e: any) => {
    if (editor.current && placeholderRef.current) {
      refreshSave(editor.current.innerHTML);
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
        onInput={onTouched}
        id="textyl-editor"
      ></div>
      <div className={styles.placeholder} ref={placeholderRef}>
        {placeholder}
      </div>
    </div>
  );
}
