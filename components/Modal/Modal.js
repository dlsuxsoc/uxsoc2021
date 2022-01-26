import React from 'react';
import styles from "./Modal.module.scss"
import Link from "next/link";

const Modal = ({children = "Hello", toggleModal, title, toggle }) => {
  return (
    <div className={`${toggle ? "block" : "hidden"} ${styles.container}`}>
    <div onClick={() => toggleModal(false)} className={styles.overlay}></div>
    <div
        className={`${styles.innerContainer}  ${
            toggle ? "mt-0" : ""
        } w-4/5 d:w-3/4 bg-light overflow-y-auto overflow-x-hidden absolute left-1/2 top-1/2 transform -translate-x-1/2	 -translate-y-1/2 py-8 px-2 rounded-md`}
    >
        <button
            className="fixed right-0 top-0 mr-2 mt-1"
            onClick={() => {
                toggleModal(false);
            }}
        >
            <i className="fas fa-times md:text-2xl"></i>
        </button>

        <h2 className="md:text-3xl text-center mb-2 md:mb-8 px-4">{title}</h2>
        <p className="my-3 text-center text-lg">{children}</p>
        <div className="text-center justify-items-center">
        </div>
    </div>
</div>
  );
};

export default Modal;