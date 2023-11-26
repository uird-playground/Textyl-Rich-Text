import React, { ReactNode, useEffect, useState } from "react";
import { formatDoc } from "../../services/command";
import "./SelectButtonContainerStyle.css";

export const SelectButtonContainer = ({
  action,
  data,
  trigger,
}: {
  action: string;
  trigger: ReactNode;
  data: Array<{ label: any; value: string }>;
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    selectValue(data[0].value);
  }, []);

  const selectValue = (value: string) => {
    let item = document.createElement("span");
    item.innerHTML = data.filter((item) => item.value == value)[0].label;
    formatDoc(action, value);
  };

  return (
    <div
      className="textyle_select-button-holder"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {trigger}
      {show && (
        <div className="textyle_dropdown">
          <div>
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => selectValue(item.value)}
                dangerouslySetInnerHTML={{ __html: item.label }}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
