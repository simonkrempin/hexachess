import React from "react";
import "./page.module.css";

import { Card } from "@components";

export default function Home() {
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
