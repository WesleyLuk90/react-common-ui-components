import React, { ReactNode } from "react";
import { Variant } from "../Variant";
import { getVariant } from "../Variants";

export function TextInput({
    variant,
    value,
    onChange,
    label,
    placeholder,
}: {
    variant?: Variant;
    value?: string;
    onChange: (newValue: string) => void;
    label?: ReactNode;
    placeholder?: string;
}) {
    const component = getVariant(variant).forComponent("text-input");
    return (
        <div className={component.root()}>
            {label && <label className={component.root()}>{label}</label>}
            <input
                type="text"
                className={component.forElement("input")}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
