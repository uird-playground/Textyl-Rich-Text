import React from "react";
import ToolBar1 from "./ToolBar1";

export default function TextylToolbar({ type }: { type?: number }) {
  switch (type) {
    case 1:
      return <ToolBar1 />;
    default:
      return <ToolBar1 />;
  }
}
