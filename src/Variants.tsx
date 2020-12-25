import { DefaultVariant } from "./DefaultVariant";
import { Variant } from "./Variant";

export const Default = new DefaultVariant("default");

export function getVariant(variant?: Variant): Variant {
    return variant ?? Default;
}
