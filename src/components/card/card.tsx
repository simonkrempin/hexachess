"use client";

import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

interface CardProps {
    text: string;
    title: string;
    link: string;
}

export default function Card({ text, title, link }: CardProps) {
    return (
        <div className={styles.card}>
            <Link className={styles.link} href={link}>
                <div className={`${styles.card2} centered column`}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </Link>
        </div>
    );
}
