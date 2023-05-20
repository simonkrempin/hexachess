import React from "react";

import styles from "./loadingPage.module.css";

interface LoadingPageProps {
    children?: React.ReactNode;
}

export default function LoadingPage({ children }: LoadingPageProps) {
    return (
        <div className="full centered column">
            <div className={styles.loader}>
                <div className={styles.loaderSquare}></div>
                <div className={styles.loaderSquare}></div>
                <div className={styles.loaderSquare}></div>
                <div className={styles.loaderSquare}></div>
                <div className={styles.loaderSquare}></div>
                <div className={styles.loaderSquare}></div>
                <div className={styles.loaderSquare}></div>
            </div>
            <h3>...lädt</h3>
            {children}
        </div>
    );
}
