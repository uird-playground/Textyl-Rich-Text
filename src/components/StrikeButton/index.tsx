import React from "react";
import { IconButtonContainer } from "../containers/IconButtonContainer";

export default function TextylStrikeThrough(props: any) {
  return (
    <IconButtonContainer action="strikeThrough">
      {props.children || (
        <div
          style={{
            padding: "6px 3px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M3 12h18M16.286 3h-6.218a4.068 4.068 0 00-1.286 7.927L12 12m-6 9h7.932a4.068 4.068 0 003.58-6"
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
