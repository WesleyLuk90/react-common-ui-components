import React, { ReactNode } from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function Header({
    level,
    children,
    variant,
}: {
    level?: number;
    children?: ReactNode;
    variant?: Variant;
}) {
    const component = getVariant(variant).forComponent("header");
    switch (level) {
        case 6:
            return <h6 className={component.root(["level-6"])}>{children}</h6>;
        case 5:
            return <h5 className={component.root(["level-5"])}>{children}</h5>;
        case 4:
            return <h4 className={component.root(["level-4"])}>{children}</h4>;
        case 3:
            return <h3 className={component.root(["level-3"])}>{children}</h3>;
        case 2:
            return <h2 className={component.root(["level-2"])}>{children}</h2>;
        case 1:
        default:
            return <h1 className={component.root(["level-1"])}>{children}</h1>;
    }
}
