import React from "react";
import { SelectButtonContainer } from "../containers/SelectButtonContainer";

const data = [
  {
    label: `<span style="font-size: 32px;">Heading 1</span>`,
    value: "7",
  },
  {
    label: `<span style="font-size: 24px;">Heading 2</span>`,
    value: "6",
  },
  {
    label: `<span style="font-size: 18px;">Heading 3</span>`,
    value: "5",
  },
  {
    label: `<span style="font-size: 14px;">Paragraph</span>`,
    value: "4",
  },
];

export default function TextSizeSelect(props: any) {
  return <SelectButtonContainer action="fontSize" data={data} />;
}
