import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import "./style.css";

let timeout: ReturnType<typeof setTimeout>;

export default function TextylEditor({
  placeholder = "Start typing here...",
  onChange,
  initialValue = "",
}: {
  placeholder?: string;
  onChange?: (el: string) => void;
  initialValue?: string;
}) {
  // const editor = useRef<HTMLDivElement>(null);
  // const placeholderRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<HTMLDivElement | null>(null);
  const [placeholderRef, setPlaceholderRef] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    if (window !== undefined) {
      document.execCommand("defaultParagraphSeparator", false, "p");
    }
  }, []);

  useLayoutEffect(() => {
    if (initialValue && placeholderRef) {
      placeholderRef.innerHTML = "";
    }
  }, [placeholderRef, initialValue]);

  const refreshSave = (value: string) => {
    if (onChange) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(value);
      }, 1000);
    }
  };

  const onTouched = (e: any) => {
    if (editor && placeholderRef) {
      refreshSave(editor.innerHTML);
      if (editor.innerText == placeholder || editor.innerText.length == 0)
        placeholderRef.innerHTML = placeholder;
      else placeholderRef.innerHTML = "";
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={setEditor}
        className="textyle_editor"
        contentEditable={true}
        spellCheck={false}
        onInput={onTouched}
        id="textyl-editor"
        dangerouslySetInnerHTML={{ __html: initialValue }}
      ></div>
      <div className="textyle_editor-placeholder" ref={setPlaceholderRef}>
        {placeholder}
      </div>
    </div>
  );
}
