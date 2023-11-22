import React, { useState } from "react";
import { IconButtonContainer } from "../containers/IconButtonContainer";
import Modal from "../containers/Modal";
import { formatDoc } from "../../services/command";
import styles from "./LinkButton.module.css";

const TABS = {
  new: "NEW",
  current: "CURRENT",
};

const getSelectedLinkInfo = (range?: any) => {
  const selection = range ?? window.getSelection();

  if (selection && selection.anchorNode) {
    let selectedNode: Node | null = selection.anchorNode;

    // Traverse the DOM tree upwards until an <a> element is found or until reaching the root element
    while (selectedNode && selectedNode.parentNode) {
      if (selectedNode.parentNode.nodeName.toUpperCase() === "A") {
        const anchorElement = selectedNode.parentNode as HTMLAnchorElement;
        const href = anchorElement.href;
        const text = anchorElement.textContent;
        return { href, text };
      }

      selectedNode = selectedNode.parentNode;
    }
    return { text: selection.toString(), href: "" };
  }
};

export default function TextylLink(props: any) {
  const [data, setData] = useState({
    link: "",
    text: "",
    tab: TABS.new,
  });
  const [range, setRange] = useState<any>(null);

  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setRange(window.getSelection()?.getRangeAt(0));
    let selection = getSelectedLinkInfo();
    if (selection && selection.text) {
      setData({ ...data, text: selection.text, link: selection.href });
    }
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const insert = () => {
    const divElement = document.getElementById("textyl-editor");
    divElement?.focus();
    let selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    let elementToInsert = "";
    if (data.tab == TABS.new) {
      elementToInsert = `<a href="${data.link}" target="_blank" rel="norefferer">${data.text}</a>`;
    } else {
      elementToInsert = `<a href="${data.link}">${data.text}</a>`;
    }
    formatDoc("insertHTML", elementToInsert);
    closeModal();
  };

  const changeTabOption = (e: any) => {
    setData({ ...data, tab: e.target.value });
  };

  const changeLinkValue = (e: any) => {
    setData({ ...data, link: e.target.value });
  };

  const changeTextValue = (e: any) => {
    setData({ ...data, text: e.target.value });
  };

  return (
    <Modal
      title="Insert/Edit Link"
      trigger={
        <IconButtonContainer popover="Insert/Edit Link">
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
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 001.143.124"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 11.998c0 2.491 2.317 4.997 5.143 4.997h1.714c2.84 0 5.143-2.237 5.143-4.997 0-2.379-1.71-4.37-4-4.874A5.304 5.304 0 0016.857 7"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          )}
        </IconButtonContainer>
      }
      isOpen={isOpen}
      showModal={showModal}
      closeModal={closeModal}
    >
      <div className={styles.input}>
        <label>URL</label>
        <input
          type="text"
          placeholder="Insert Your Link"
          value={data.link}
          onChange={changeLinkValue}
        />
      </div>
      <div className={styles.input}>
        <label>Text To Display</label>
        <input
          type="text"
          placeholder="Insert Your display title"
          value={data.text}
          onChange={changeTextValue}
        />
      </div>

      <div className={styles.input}>
        <label>Open Link in...</label>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="new"
            name="options"
            value={TABS.new}
            checked={data.tab == TABS.new}
            onChange={changeTabOption}
          />
          <label htmlFor="new">New Tab</label>
        </div>

        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="current"
            name="options"
            value={TABS.current}
            checked={data.tab == TABS.current}
            onChange={changeTabOption}
          />
          <label htmlFor="current">Current Tab</label>
        </div>
      </div>

      <div
        style={{
          marginTop: 12,
          display: "flex",
          justifyContent: "flex-end",
          gap: 6,
        }}
      >
        <button className={styles.cancelButton} onClick={closeModal}>
          Cancel
        </button>
        <button className={styles.submitButton} onClick={insert}>
          Save
        </button>
      </div>
    </Modal>
  );
}
