import { DefaultVariant } from "../src/DefaultVariant";

describe("DefaultVariant", () => {
    const variant = new DefaultVariant("default");
    const component = variant.forComponent("button");
    it("should generate roots", () => {
        expect(component.root()).toEqual("button button--default");
        expect(component.root(["hover", "down"])).toEqual(
            "button button--default button--hover button--down"
        );
    });

    it("should generate elements", () => {
        expect(component.forElement("label")).toEqual(
            "button__label button__label--default"
        );
        expect(component.forElement("label", ["hover", "down"])).toEqual(
            "button__label button__label--default button__label--hover button__label--down"
        );
    });
});
