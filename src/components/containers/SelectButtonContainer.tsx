import React, { useState } from "react";
import { formatDoc } from "../../services/command";
import styles from "./SelectButtonContainerStyle.module.css";

export const SelectButtonContainer = ({
  action,
  data,
}: {
  action: string;
  data: Array<{ label: any; value: string }>;
}) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(data[0].value);

  const selectValue = (value: string) => {
    let item = document.createElement("span");
    item.innerHTML = data.filter((item) => item.value == value)[0].label;
    setSelected(item.innerText);
    formatDoc(action, value);
  };
  return (
    <div
      className={styles.holder}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span>{selected}</span>
      <svg
        width="18px"
        height="18px"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
      >
        <path
          d="M17 8l-5-5-5 5M17 16l-5 5-5-5"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      {show && (
        <div className={styles.dropdown}>
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
