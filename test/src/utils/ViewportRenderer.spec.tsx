import { mount } from "enzyme";
import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { range } from "../../../src/utils/numbers";
import { ViewportRenderer } from "../../../src/utils/ViewportRenderer";

describe("ViewportRenderer", () => {
    it("should render", () => {
        const renderer = mount(
            <ViewportRenderer items={range(200)}>{(i) => i}</ViewportRenderer>
        );
        function scroll(top: number) {
            jest.restoreAllMocks();
            const divs = renderer.find("div");
            if (divs.length != 102) {
                throw new Error("Expected 102 divs");
            }
            divs.slice(1, 101).forEach((d, i) =>
                jest
                    .spyOn(d.getDOMNode(), "getBoundingClientRect")
                    .mockReturnValue({
                        top: top + i * 20,
                        bottom: top + (i + 1) * 20,
                    } as DOMRect)
            );
            ReactTestUtils.act(() => {
                window.dispatchEvent(new CustomEvent("scroll"));
            });
            return renderer.update().find("div");
        }
        const divs = scroll(0);
        expect(divs).toHaveLength(102);
        expect(divs.get(0).props.style.height).toEqual(0);
        expect(divs.get(101).props.style.height).toEqual(2000);
        expect(divs.slice(1, 101).map((d) => d.text())).toEqual(
            range(100).map((i) => `${i}`)
        );
        const updatedDivs = scroll(-2000);
        expect(updatedDivs).toHaveLength(102);
        expect(updatedDivs.get(0).props.style.height).toEqual(2000);
        expect(updatedDivs.get(101).props.style.height).toEqual(0);
        expect(updatedDivs.slice(1, 101).map((d) => d.text())).toEqual(
            range(100, 200).map((i) => `${i}`)
        );
    });
});
