import React from "react";

import { BoardContext } from "@contexts/BoardContext";

const useBoard = () => {
    const context = React.useContext(BoardContext);

    if (!context) {
        throw new Error("useBoard must be used within a BoardProvider");
    }

    return { state: context.state, dispatch: context.dispatch };
};

export { useBoard };
