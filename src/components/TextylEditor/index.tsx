import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.css";

export default function TextylEditor() {
  const editor = useRef<HTMLDivElement>(null);
  const placeholder = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined) {
      document.execCommand("defaultParagraphSeparator", false, "p");
    }
  }, []);

  const onTouched = (e: any) => {
    if (editor.current && placeholder.current) {
      if (
        editor.current.innerText ==
          "Write here. You can also include #hashtags." ||
        editor.current.innerText.length == 0
      )
        placeholder.current.innerHTML =
          "Write here. You can also include #hashtags.";
      else placeholder.current.innerHTML = "";
    }
  };

  return (
    <div
      ref={editor}
      className={styles.editor}
      contentEditable={true}
      spellCheck={false}
      onKeyUp={onTouched}
      id="textyl-editor"
    >
      <div className={styles.placeholder} ref={placeholder}>
        Write here. You can also include #hashtags.
      </div>
    </div>
  );
}
