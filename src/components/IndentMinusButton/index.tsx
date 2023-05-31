import React from "react";
import { IconButtonContainer } from "../containers/IconButtonContainer";

export default function TextylOutdent(props: any) {
  return (
    <IconButtonContainer action="outdent" popover="Decrease indent">
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
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 7h10v2H4zm0-4h16v2H4zm0 8h10v2H4zm0 4h10v2H4zm0 4h16v2H4zm16-3V8l-4 4z"></path>
          </svg>
        </div>
      )}
    </IconButtonContainer>
  );
}
