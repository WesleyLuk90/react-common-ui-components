import React from "react";
import { DefaultVariant } from "../DefaultVariant";
import { Variant } from "../Variant";
import { Default } from "../Variants";

export function Button({
    children,
    onClick,
    variant,
}: {
    children: React.ReactNode;
    onClick: () => void;
    variant?: Variant;
}) {
    const component = (variant ?? Default).forComponent("button");
    return (
        <button onClick={() => onClick()} className={component.root()}>
            {children}
        </button>
    );
}
