import React, { ReactNode } from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function Link({
    href,
    children,
    variant,
}: {
    href?: string;
    children?: ReactNode;
    variant?: Variant;
}) {
    const component = getVariant(variant).forComponent("link");
    return (
        <a href={href} className={component.root()}>
            {children}
        </a>
    );
}
