"use client";

import React from "react";
import { Button, Modal } from "@components";

interface CopyButtonProps {
    copyValue: string;
    text?: string;
}

export default ({ copyValue, text }: CopyButtonProps) => {
    const [copied, setCopied] = React.useState<boolean>(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(copyValue);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <div className="column">
            <Button onClick={copyToClipboard} text={text ?? "Copy"} />
            {copied ? <Modal>{"Kopiert!"}</Modal> : null}
        </div>
    );
};
