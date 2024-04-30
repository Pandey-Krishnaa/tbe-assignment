"use client";
import React from "react";
import ReactDOM from "react-dom";
function Modal({
  children,
  onClose,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}) {
  if (typeof window === "undefined" || !document.getElementById("modal")) {
    return <div></div>; // Completely avoid rendering during SSR
  }

  return ReactDOM.createPortal(
    open ? (
      <div className="backdrop" onClick={onClose}>
        {children}
      </div>
    ) : (
      <div></div>
    ),
    document.getElementById("modal")!
  );
}

export default Modal;
