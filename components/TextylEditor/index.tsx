import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
// import "./style.css";

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
      <style jsx>{`
        .textyle_editor {
          border: none;
          width: 100%;
          padding: 12px 0;
          color: #233477;
          font-family: sans-serif;
          position: relative;
        }
        .textyle_editor-placeholder {
          all: unset;
          content: "";
          position: absolute;
          left: 0;
          top: 12px;
          pointer-events: none;
          user-select: none;
          font-size: 18px;
          color: #838383;
          font-family: sans-serif;
        }
        .textyle_editor p {
          margin: 8px 0px;
          line-height: 1.5;
        }
        .textyle_editor:focus {
          outline: 0;
        }
      `}</style>
    </div>
  );
}
