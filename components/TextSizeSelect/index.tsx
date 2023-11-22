import React from "react";
import { SelectButtonContainer } from "../containers/SelectButtonContainer";
import { IconButtonContainer } from "../containers/IconButtonContainer";

const data = [
  {
    label: `<span style="font-size: 32px;">Heading 1</span>`,
    value: "<h1>",
  },
  {
    label: `<span style="font-size: 24px;">Heading 2</span>`,
    value: "<h2>",
  },
  {
    label: `<span style="font-size: 18px;">Heading 3</span>`,
    value: "<h3>",
  },
  {
    label: `<span style="font-size: 14px;">Paragraph</span>`,
    value: "<p>",
  },
];

export default function TextylHeading(props: any) {
  return (
    <SelectButtonContainer
      action="formatBlock"
      data={data}
      trigger={
        <IconButtonContainer>
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
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M3 7V5h14v2M10 5v14m0 0h2m-2 0H8M13 14v-2h8v2M17 12v7m0 0h-1.5m1.5 0h1.5"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          )}
        </IconButtonContainer>
      }
    />
  );
}
