import React from "react";
import { IconButtonContainer } from "../containers/IconButtonContainer";

export default function TextylAlignLeft(props: any) {
  return (
    <IconButtonContainer action="justifyLeft" popover={props.popover}>
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
              d="M3 10h14M3 6h18M3 18h14M3 14h18"
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
