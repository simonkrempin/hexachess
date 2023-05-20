"use client";

import React from "react";

import styles from "./page.module.css";

import { Loader, LoadingPage, CopyButton } from "@components";
import { useGameDispatchContext } from "@contexts/GameContext";
import { useRouter } from "next/navigation";
import { createSession } from "@services/sessionService";

export default function Page() {
    // const dispatch = useGameDispatchContext();
    // dispatch.setSession("asdfasdf");
    // createSession("asdfasdf");
    // const router = useRouter();
    // router.push("/play/asdfasdf");
    const friends = true;

    return (
        <main>
            <LoadingPage>
                { friends ? <CopyButton copyValue="asdf" text="Copy Link"/> : null}
            </LoadingPage>
        </main>
    );
}
