import React, { ReactEventHandler, ReactNode, useState } from "react";
import "./ModalStyle.css";

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
    </>
  );
}
