import React from 'react';
import styles from "./Modal.module.scss"
import Link from "next/link";

const Modal = ({children, toggleModal, title, toggle }) => {
  return (
    <div className={`${toggle ? "block" : "hidden"} ${styles.container}`}>
    <div onClick={() => toggleModal(false)} className={styles.overlay}></div>
    <div
        className={`${styles.innerContainer}  ${
            toggle ? "mt-0" : ""
        } w-4/5 d:w-3/4 bg-white overflow-y-auto overflow-x-hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-8 px-8 rounded-md`}
    >
        <button
            className="fixed right-0 top-0 mr-2 mt-1"
            onClick={() => {
                toggleModal(false);
            }}
        >
            <i className="fas fa-times md:text-2xl"></i>
        </button>

        <h2 className="text-xl md:text-3xl text-center mb-2 md:mb-8 px-4 text-black">{title}</h2>
        <p className="my-5 text-center text-sm md:text-lg">{children}</p>
        <div className="text-center justify-items-center">
            <button 
                className={`font-bold inline-block text-center py-2 sm:py-4 px-12 h-14 max-h-14 h-auto rounded-md w-full sm:w-auto text-white bg-green cursor-pointer`}
                onClick={()=>toggleModal(false)}>
                CLOSE
            </button>
        </div>
    </div>
</div>
  );
};

export default Modal;