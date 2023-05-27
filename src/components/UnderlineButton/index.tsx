import React from "react";
import { IconButtonContainer } from "../containers/IconButtonContainer";

export default function TextylUnderline(props: any) {
  return (
    <IconButtonContainer action="underline">
      {props.children || (
        <div
          style={{
            padding: "7px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            width="26px"
            height="26px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M16 5v6a4 4 0 01-4 4v0a4 4 0 01-4-4V5M6 19h12"
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
