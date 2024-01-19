"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type ChildrenProps = {
  children: React.ReactNode;
};

const BackdropOverlay = () => {
  return (
    <div className="fixed left-0 top-0 z-20 h-screen w-full bg-black bg-opacity-75" />
  );
};

const ModalOverlay = ({ children }: ChildrenProps) => {
  return (
    <div className="fixed left-0 top-0 z-30 flex h-screen w-full items-center justify-center">
      <div className="mx-2 rounded-lg bg-neutral-50 p-4 text-gray-900 dark:bg-neutral-900">
        {children}
      </div>
    </div>
  );
};

const Modal = ({ children }: ChildrenProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (typeof document !== "undefined") {
      const modalRoot = document.getElementById("modal-root");
      setModalRoot(modalRoot);
    }
  }, []);
  return (
    <>
      {modalRoot ? (
        <>
          {ReactDOM.createPortal(<BackdropOverlay />, modalRoot)}

          {ReactDOM.createPortal(
            <ModalOverlay>{children}</ModalOverlay>,
            modalRoot,
          )}
        </>
      ) : (
        <>
          {ReactDOM.createPortal(<BackdropOverlay />, document.body)}

          {ReactDOM.createPortal(
            <ModalOverlay>{children}</ModalOverlay>,
            document.body,
          )}
        </>
      )}
    </>
  );
};

export default Modal;
