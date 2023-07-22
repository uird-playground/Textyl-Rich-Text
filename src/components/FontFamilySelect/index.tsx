import React from "react";
import { SelectButtonContainer } from "../containers/SelectButtonContainer";
import { IconButtonContainer } from "../containers/IconButtonContainer";

const data = [
  {
    label: `<span style="font-size: 18px; font-family: arial, sans-serif;">Arial</span>`,
    value: "arial, sans-serif",
  },
  {
    label: `<span style="font-size: 18px; font-family: arial black, sans-serif;">Arial Black</span>`,
    value: "arial black, sans-serif",
  },
  {
    label: `<span style="font-size: 18px; font-family: courier new, courier, monospace;">Courier New</span>`,
    value: "courier new, courier, monospace",
  },
  {
    label: `<span style="font-size: 18px; font-family: Verdana, sans-serif;">Verdana</span>`,
    value: "Verdana, sans-serif",
  },
  {
    label: `<span style="font-size: 18px; font-family: Times New Roman, serif">Times New Roman</span>`,
    value: "Times New Roman, serif",
  },
  {
    label: `<span style="font-size: 18px; font-family: georgia, palatino, serif;">Georgia</span>`,
    value: "georgia, palatino, serif",
  },
  {
    label: `<span style="font-size: 18px; font-family: helvetica, arial, sans-serif;">Helvetica</span>`,
    value: "helvetica, arial, sans-serif",
  },
  {
    label: `<span style="font-size: 18px; font-family: impact, sans-serif;">Impact</span>`,
    value: "impact, sans-serif",
  },
  {
    label: `<span style="font-size: 18px; font-family: tahoma, arial, helvetica, sans-serif;">Tahoma</span>`,
    value: "tahoma, arial, helvetica, sans-serif",
  },
  {
    label: `<span style="font-size: 18px; font-family: terminal, monaco, monospace;">Terminal</span>`,
    value: "terminal, monaco, monospace",
  },
  {
    label: `<span style="font-size: 18px; font-family: comic sans ms, sans-serif;">Comic Sans MS</span>`,
    value: "comic sans ms, sans-serif",
  },
  {
    label: `<span style="font-size: 18px; font-family: book antiqua, palatino, serif;">Book Antiqua</span>`,
    value: "book antiqua, palatino, serif",
  },
];

export default function TextylFontFamily(props: any) {
  return (
    <SelectButtonContainer
      action="fontName"
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
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15 4h7v2h-7zm1 4h6v2h-6zm2 4h4v2h-4zM9.307 4l-6 16h2.137l1.875-5h6.363l1.875 5h2.137l-6-16H9.307zm-1.239 9L10.5 6.515 12.932 13H8.068z"></path>
              </svg>
            </div>
          )}
        </IconButtonContainer>
      }
    />
  );
}
