import React from "react";
import TextylBold from "../BoldButton";
import TextylUnderline from "../UnderlineButton";
import TextylItalic from "../ItalicButton";
import TextylStrike from "../StrikeButton";
import TextylAlignLeft from "../LeftAlignButton";
import TextylAlignRight from "../RightAlignButton";
import TextylAlignCenter from "../CenterAlignButton";
import TextylHeading from "../TextSizeSelect";
import TextylImage from "../ImageButton";
import TextylLink from "../LinkButton";
import TextylHR from "../HrButton";
import TextylOrderedList from "../ListOrderedButton";
import TextylUnorderedList from "../ListUnorderedButton";
import TextylIndent from "../IndentPlusButton";
import TextylOutdent from "../IndentMinusButton";
import TextylFontFamily from "../FontFamilySelect";

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
