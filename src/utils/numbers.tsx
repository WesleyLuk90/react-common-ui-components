export function clamp(value: number, min: number, max: number): number {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}

export function range(a: number, b?: number): number[] {
    let start = 0;
    let end = a;
    if (b != null) {
        start = a;
        end = b;
    }
    const length = Math.abs(end - start);
    const step = start < end ? 1 : -1;
    const array = new Array(length);
    for (let i = 0; i < length; i++) {
        array[i] = start + i * step;
    }
    return array;
}
