import React from "react";
import { IconButtonContainer } from "../containers/IconButtonContainer";

export default function TextylHR(props: any) {
  return (
    <IconButtonContainer action="insertHorizontalRule" popover="Insert line">
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
              d="M2 12h20M7 4H4v3M11 4h2M17 4h3v3M11 20h2M7 20H4v-3M17 20h3v-3"
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
