import React, { ReactNode, useEffect, useState } from "react";
import { formatDoc } from "../../services/command";
// import "./SelectButtonContainerStyle.css";

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
      <style jsx>{`
        .textyle_select-button-holder {
          position: relative;
        }

        .textyle_select-button-holder .textyle_dropdown {
          position: absolute;
          top: 30px;
          left: 0;
          width: 200px;
          z-index: 2;
          padding-top: 10px;
        }

        .textyle_select-button-holder .textyle_dropdown > div {
          border-radius: 6px;
          border: solid 1px black;
          background-color: white;
          overflow: hidden;
        }

        .textyle_select-button-holder .textyle_dropdown button {
          background-color: transparent;
          border: none;
          width: 100%;
          text-align: left;
          padding: 5px 12px;
          cursor: pointer;
        }

        .textyle_select-button-holder .textyle_dropdown button:hover {
          background-color: #ccc;
        }

        .textyle_select-button-holder .selected {
          white-space: pre;
          font-family: sans-serif;
        }
      `}</style>
    </div>
  );
};
