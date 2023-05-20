import React from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";

interface ModalProps {
    children?: React.ReactNode;
}

export default ({ children }: ModalProps) => {
    const modalRoot = document.body;

    return createPortal(<div className={styles.modal}>{children}</div>, modalRoot);
};
