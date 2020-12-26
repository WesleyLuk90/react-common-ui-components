import React, { ReactElement, ReactNode } from "react";
import { TypedChildren } from "../../docs/src/utils/TypedChildren";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function Layout({
    variant,
    children,
}: {
    variant?: Variant;
    children?: TypedChildren<typeof LayoutArea>;
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
