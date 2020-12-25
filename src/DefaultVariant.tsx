import { Variant, ComponentVariant } from "./Variant";

export class DefaultVariant implements Variant {
    constructor(readonly variant: string) {}

    forComponent(component: string): ComponentVariant {
        return new DefaultComponentVariant(this.variant, component);
    }
}

function bemBlock(block: string, modifier?: string) {
    return modifier != null ? `${block}--${modifier}` : block;
}
function bemElement(block: string, element: string, modifier?: string) {
    return modifier != null
        ? `${block}__${element}--${modifier}`
        : `${block}__${element}`;
}

export class DefaultComponentVariant implements ComponentVariant {
    constructor(readonly variant: string, readonly component: string) {}

    root(states: string[] = []): string {
        return [
            bemBlock(this.component),
            bemBlock(this.component, this.variant),
            ...states.map((state) => bemBlock(this.component, state)),
        ].join(" ");
    }

    forElement(element: string, states: string[] = []): string {
        return [
            bemElement(this.component, element),
            bemElement(this.component, element, this.variant),
            ...states.map((state) =>
                bemElement(this.component, element, state)
            ),
        ].join(" ");
    }
}
