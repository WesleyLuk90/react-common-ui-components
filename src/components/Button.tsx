import React from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function Button({
    children,
    onClick,
    variant,
}: {
    children?: React.ReactNode;
    onClick?: () => void;
    variant?: Variant;
}) {
    const component = getVariant(variant).forComponent("button");
    return (
        <button onClick={onClick} className={component.root()}>
            {children}
        </button>
    );
}
