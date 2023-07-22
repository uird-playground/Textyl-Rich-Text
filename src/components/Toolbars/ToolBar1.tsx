import React from "react";

import {
  TextylBold,
  TextylUnderline,
  TextylItalic,
  TextylStrike,
  TextylAlignLeft,
  TextylAlignCenter,
  TextylAlignRight,
  TextylHeading,
  TextylImage,
  TextylLink,
  TextylHR,
  TextylOrderedList,
  TextylUnorderedList,
  TextylIndent,
  TextylOutdent,
  TextylFontFamily,
} from "../";

export default function ToolBar1() {
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "12px 8px"
      }}
    >
      <TextylBold />
      <TextylUnderline />
      <TextylItalic />
      <TextylStrike />
      <TextylAlignLeft />
      <TextylAlignCenter />
      <TextylAlignRight />
      <TextylHeading />
      <TextylFontFamily />
      <TextylImage />
      <TextylLink />
      <TextylHR />
      <TextylOrderedList />
      <TextylUnorderedList />
      <TextylIndent />
      <TextylOutdent />
    </div>
  );
}
