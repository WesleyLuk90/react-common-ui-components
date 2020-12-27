import React, { createContext, ReactNode, useContext } from "react";
import { TypedChildren } from "../../docs/src/utils/TypedChildren";
import { ComponentVariant, Variant } from "../Variant";
import { getVariant } from "../Variants";

const NavigationContext = createContext<ComponentVariant | undefined>(
    undefined
);

export function Navigation({
    children,
    variant,
}: {
    children?: TypedChildren<
        typeof NavigationItem | typeof NavigationSeparator
    >;
    variant?: Variant;
}) {
    const component = getVariant(variant).forComponent("navigation");
    return (
        <NavigationContext.Provider value={component}>
            <ul className={component.root()}>{children}</ul>
        </NavigationContext.Provider>
    );
}

export function NavigationItem({ children }: { children?: ReactNode }) {
    const variant = useContext(NavigationContext);
    return <li className={variant?.forElement("item")}>{children}</li>;
}

export function NavigationSeparator() {
    const variant = useContext(NavigationContext);
    return <li className={variant?.forElement("separator")}></li>;
}
