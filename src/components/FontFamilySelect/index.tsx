import React from "react";
import { SelectButtonContainer } from "../containers/SelectButtonContainer";

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
  return <SelectButtonContainer action="fontName" data={data} />;
}
