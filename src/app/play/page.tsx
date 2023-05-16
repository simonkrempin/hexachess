import React from "react";

import styles from "./page.module.css";

import { Loader } from "@components";

export default function Page() {
    return (
        <main>
            <div className="centered full column">
                <Loader />
                <h3>... finding game</h3>
            </div>
        </main>
    );
}
