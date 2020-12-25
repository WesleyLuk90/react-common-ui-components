import React, { ReactNode } from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function Layout({
    variant,
    children,
}: {
    variant?: Variant;
    children?: ReactNode;
}) {
    const component = getVariant(variant).forComponent("layout");
    return <div className={component.root()}>{children}</div>;
}

export function LayoutArea({
    name,
    children,
}: {
    name: string;
    children?: ReactNode;
}) {
    return <div style={{ gridArea: name }}>{children}</div>;
}
