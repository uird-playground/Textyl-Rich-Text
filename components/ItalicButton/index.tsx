import React from "react";
import { IconButtonContainer } from "../containers/IconButtonContainer";

export default function TextylItalic(props: any) {
  return (
    <IconButtonContainer action="italic" popover="Italic">
      {props.children || (
        <div
          style={{
            padding: "4px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M11 5h3m3 0h-3m0 0l-4 14m0 0H7m3 0h3"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      )}
    </IconButtonContainer>
  );
}
