export function clamp(value: number, min: number, max: number): number {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}

export function isBetween(value: number, min: number, max: number): boolean {
    return value > min && value < max;
}
