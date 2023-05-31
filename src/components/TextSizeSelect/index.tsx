import React from "react";
import { SelectButtonContainer } from "../containers/SelectButtonContainer";

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
  return <SelectButtonContainer action="formatBlock" data={data} />;
}
