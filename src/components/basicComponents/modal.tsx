import React, { MouseEvent } from "react";

interface ModalProps {
  onClose: Function;
  open: boolean;
  children: any;
}

const Modal = ({ onClose, open, children }: ModalProps) => {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <article
      onClick={handleClick}
      className={`modal ${open ? "modal-open" : ""}`}
    >
      <section className={`modal-body`}>
        <button className={`close-button`} onClick={handleClick}>
          X
        </button>
        {children}
      </section>
    </article>
  );
};

export default Modal;
