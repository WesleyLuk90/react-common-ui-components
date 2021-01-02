import React, { ReactNode, useEffect, useState } from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

interface PartialOptions<T> {
    options: T[];
    loadMore?: LoadOptions<T>;
}

export type LoadOptions<T> = (search?: string) => Promise<PartialOptions<T>>;

export function Select<T>({
    selected,
    options,
    renderOption,
    id,
    onSelect,
    variant,
}: {
    selected: T;
    options: LoadOptions<T>;
    renderOption: (t?: T) => ReactNode;
    id: (t: T) => string;
    onSelect: (t: T) => void;
    variant?: Variant;
}) {
    const [loadedOptions, setLoadedOptions] = useState<T[]>([]);

    const component = getVariant(variant).forComponent("select");
    return <div className={component.root()}>{renderOption(selected)}</div>;
}
