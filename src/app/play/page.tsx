"use client";

import React from "react";

import styles from "./page.module.css";

import { Loader } from "@components";
import { useGameDispatchContext } from "@contexts/GameContext";
import { useRouter } from "next/navigation";
import { createSession } from "@services/sessionService";

export default function Page() {
    const dispatch = useGameDispatchContext();
    dispatch.setSession("asdfasdf");
    createSession("asdfasdf");
    const router = useRouter();
    router.push("/play/asdfasdf");

    return (
        <main>
            <div className="centered full column">
                <Loader />
                <h3>... finding game</h3>
            </div>
        </main>
    );
}
