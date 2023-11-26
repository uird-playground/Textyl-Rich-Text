import React, { ReactEventHandler, ReactNode, useState } from "react";
// import "./ModalStyle.css";

export default function Modal({
  trigger,
  children,
  title,
  isOpen,
  showModal,
  closeModal,
}: {
  trigger: ReactNode;
  children: ReactNode;
  title?: string;
  isOpen: boolean;
  showModal: ReactEventHandler;
  closeModal: ReactEventHandler;
}) {
  return (
    <>
      <div onClick={showModal}>{trigger}</div>
      {isOpen && (
        <div className="textyle_modal">
          <div className="modalContainer">
            <div className="head">
              <p>{title}</p>
              <button onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                </svg>
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
      <style jsx>{`
        .textyle_modal {
          width: 100%;
          height: 100%;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 9999;
          background-color: #ffffff86;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .textyle_modal .modalContainer {
          width: 480px;
          max-width: 100%;
          background-color: white;
          border-radius: 6px;
          border: solid 1px #e9e9e9;
          padding: 22px;
        }

        .textyle_modal .modalContainer .head {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .textyle_modal .modalContainer .head > p {
          font-weight: bold;
          font-size: 20px;
          margin: 0;
        }

        .textyle_modal .modalContainer .head > button {
          background-color: transparent;
          border: none;
          padding: 0;
          width: 28px;
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .textyle_modal .modalContainer .head button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
