import React, { useState } from "react";
import { IconButtonContainer } from "../containers/IconButtonContainer";
import Modal from "../containers/Modal";
// import "./ImageButton.css";
import { formatDoc } from "../../services/command";

const getSelectedImageInfo = (range?: any) => {
  const selection = range ?? window.getSelection();

  if (selection && selection.anchorNode) {
    let selectedNode: Node | null = selection.anchorNode;

    // Traverse the DOM tree upwards until an <a> element is found or until reaching the root element
    while (selectedNode && selectedNode.parentNode) {
      if (selectedNode.parentNode.nodeName.toUpperCase() === "IMG") {
        const anchorElement = selectedNode.parentNode as HTMLImageElement;
        const src = anchorElement.src;
        const alt = anchorElement.alt;
        const width = anchorElement.width;
        return { src, alt, width };
      }

      selectedNode = selectedNode.parentNode;
    }
    return { src: selection.toString(), alt: "", width: "" };
  }
};

export default function TextylImage(props: any) {
  const [data, setData] = useState({
    src: "https://images.unsplash.com/photo-1680145900353-1b8b072c18bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "",
    width: "",
  });
  const [range, setRange] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setRange(window.getSelection()?.getRangeAt(0));
    let selection = getSelectedImageInfo();
    if (selection && selection.src) {
      setData({
        src: selection.src,
        alt: selection.alt,
        width: selection.width as string,
      });
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
    elementToInsert = `<img src="${data.src}" width="${
      data.width.length > 0 ? data.width : "100%"
    }" alt="${data.alt}" />`;
    formatDoc("insertHTML", elementToInsert);
    closeModal();
  };

  const changeSourceValue = (e: any) => {
    setData({ ...data, src: e.target.value });
  };

  const changeWidthValue = (e: any) => {
    setData({ ...data, width: e.target.value });
  };

  const changeAltValue = (e: any) => {
    setData({ ...data, alt: e.target.value });
  };

  return (
    <Modal
      title="Insert Image"
      trigger={
        <IconButtonContainer popover="Insert/Edit Image">
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
                  d="M13 21H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6V13"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 16l7-3 5.5 2.5M16 10a2 2 0 110-4 2 2 0 010 4zM16 19h3m3 0h-3m0 0v-3m0 3v3"
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
      <div className="textyle_image-button-input">
        <label>
          Source Link <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          placeholder="Insert Your Link"
          value={data.src}
          onChange={changeSourceValue}
        />
      </div>
      <div className="textyle_image-button-input">
        <label>Image width</label>
        <input
          type="text"
          placeholder="100%, 500px - default is 100%"
          value={data.width}
          onChange={changeWidthValue}
        />
      </div>
      <div className="textyle_image-button-input">
        <label>Alternative Text</label>
        <input
          type="text"
          placeholder="Insert your image description (Empty if the image is decorative)"
          value={data.alt}
          onChange={changeAltValue}
        />
      </div>
      <div
        style={{
          marginTop: 12,
          display: "flex",
          justifyContent: "flex-end",
          gap: 6,
        }}
      >
        <button
          className="textyle_image-button-cancelButton"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button className="textyle_image-button-submitButton" onClick={insert}>
          Save
        </button>
      </div>
      <style jsx>{`
        /* Input box styles */

        .textyle_image-button-input {
          margin-top: 24px;
        }

        .textyle_image-button-input > input {
          width: calc(100% - 24px);
          padding: 10px;
          border: 2px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          color: #333;
          transition: border-color 0.3s ease;
        }

        /* Input box focus styles */
        .textyle_image-button-input > input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }

        /* Placeholder text styles */
        .textyle_image-button-input > input::placeholder {
          color: #999;
        }

        /* Label styles */
        .textyle_image-button-input > label {
          font-size: 14px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
          display: block;
        }

        /* Error styles */
        .textyle_image-button-input.error input {
          border-color: #ff0000;
        }

        .textyle_image-button-input.error > label {
          color: #ff0000;
        }

        /* Error message styles */
        .textyle_image-button-input.error .error-message {
          color: #ff0000;
          font-size: 12px;
          margin-top: 5px;
        }

        /* Submit Button styles */
        .textyle_image-button-submitButton {
          display: inline-block;
          padding: 10px 20px;
          background-color: black;
          color: #fff;
          border: solid 1px black;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        /* Submit button hover styles */
        .textyle_image-button-submitButton:hover {
          background-color: #0056b3;
          border: solid 1px #0056b3;
        }

        /* Submit button focus styles */
        .textyle_image-button-submitButton:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }

        /* Submit button disabled styles */
        .textyle_image-button-submitButton:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Cancel Button styles */
        .textyle_image-button-cancelButton {
          display: inline-block;
          padding: 10px 20px;
          background-color: transparent;
          color: black;
          border: solid 1px black;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        /* Cancel button hover styles */
        .textyle_image-button-cancelButton:hover {
          background-color: black;
          color: white;
        }

        /* Cancel button focus styles */
        .textyle_image-button-cancelButton:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }
      `}</style>
    </Modal>
  );
}
