import React, { ReactNode } from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function InsertedText({
    children,
    variant,
}: {
    children?: ReactNode;
    variant?: Variant;
}) {
    const component = getVariant(variant).forComponent("inserted-text");
    return <ins className={component.root()}>{children}</ins>;
}
