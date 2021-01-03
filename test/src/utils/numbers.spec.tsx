import { clamp } from "../../../src/utils/numbers";

describe("numbers", () => {
    it("should clamp", () => {
        expect(clamp(5, 0, 100)).toEqual(5);
        expect(clamp(-20, 0, 100)).toEqual(0);
        expect(clamp(200, 0, 100)).toEqual(100);
    });
});
