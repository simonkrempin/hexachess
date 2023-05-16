"use client";

import React from "react";
import Game from "@core/game";

export default function GamePage({ params }: { params: { id: string }}): React.ReactElement {
  return (
    <main>
      <Game />
    </main>
  );
};