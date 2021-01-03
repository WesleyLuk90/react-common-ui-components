import { clamp, range } from "../../../src/utils/numbers";

describe("numbers", () => {
    it("should clamp", () => {
        expect(clamp(5, 0, 100)).toEqual(5);
        expect(clamp(-20, 0, 100)).toEqual(0);
        expect(clamp(200, 0, 100)).toEqual(100);
    });

    it("should generate range", () => {
        expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(range(10, 20)).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
        expect(range(20, 10)).toEqual([20, 19, 18, 17, 16, 15, 14, 13, 12, 11]);
    });
});
