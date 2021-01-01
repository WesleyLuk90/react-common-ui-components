import React, { ReactNode } from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function Paragraph({
    children,
    variant,
}: {
    children?: ReactNode;
    variant?: Variant;
}) {
    const component = getVariant(variant).forComponent("paragraph");
    return <p className={component.root()}>{children}</p>;
}
