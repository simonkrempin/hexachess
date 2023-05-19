"use client";

import React from "react";
import "./page.module.css";
import { useRouter } from "next/navigation";

import { Card } from "@components";
import { useGameContext } from "@contexts/GameContext";

export default function Home() {
    const state = useGameContext();
    const router = useRouter();

    if (state.session) {
        router.push("/play/" + state.session);
    }

    return (
        <main>
            <div className="centered full column">
                <h1>Hexachess.online</h1>
                <div className="row">
                    <Card title="Online" text="Spiele gegen Spieler auf der ganzen Welt" link="/play" />
                    <Card title="Freunde" text="Spiele gegen deine Freunde" link="/play" />
                </div>
            </div>
        </main>
    );
}
