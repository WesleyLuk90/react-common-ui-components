import React, { ReactNode } from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function Section({
    children,
    variant,
}: {
    variant?: Variant;
    children?: ReactNode;
}) {
    const component = getVariant(variant).forComponent("section");
    return <section className={component.root()}>{children}</section>;
}
