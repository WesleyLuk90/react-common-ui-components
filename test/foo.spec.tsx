import React from "react";
import { shallow } from "enzyme";

describe("Foo", () => {
    it("should bar", () => {
        let a: string | null = "Bar";
        let k = shallow(<div>Bar</div>);
        expect(k.text()).toContain(a);
    });
});
