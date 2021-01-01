import React, { ReactNode } from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function Emphasis({
    children,
    variant,
}: {
    children?: ReactNode;
    variant?: Variant;
}) {
    const component = getVariant(variant).forComponent("emphasis");
    return <em className={component.root()}>{children}</em>;
}
