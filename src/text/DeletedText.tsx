import React, { ReactNode } from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function DeletedText({
    children,
    variant,
}: {
    children?: ReactNode;
    variant?: Variant;
}) {
    const component = getVariant(variant).forComponent("deleted-text");
    return <del className={component.root()}>{children}</del>;
}
