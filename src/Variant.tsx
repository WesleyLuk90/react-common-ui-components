export interface Variant {
    forComponent(element: string): ComponentVariant;
}

export interface ComponentVariant {
    root(states?: string[]): string;
    forElement(element: string, states?: string[]): string;
}
