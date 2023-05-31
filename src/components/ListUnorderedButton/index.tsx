import React from "react";
import { IconButtonContainer } from "../containers/IconButtonContainer";

export default function TextylUnorderedList(props: any) {
  return (
    <IconButtonContainer action="insertUnorderedList" popover="Bullet list">
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
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M8 6h12M4 6.01l.01-.011M4 12.01l.01-.011M4 18.01l.01-.011M8 12h12M8 18h12"
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
