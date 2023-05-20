import React from "react";

import styles from "./button.module.css";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export default ({ text, onClick }: ButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
        // <div className={styles.button}>
        //     <div className={styles.button2} onClick={onClick}>
        //         {text}
        //     </div>
        // </div>
    );
};
