import React, { useState } from "react";
import { Section } from "../../../src/components/Section";
import { Select } from "../../../src/forms/Select";
import { TextInput } from "../../../src/forms/TextInput";
import { Header } from "../../../src/text/Header";
import { ViewportRenderer } from "../../../src/utils/ViewportRenderer";

const items = new Array(10000).fill(0).map((n, i) => i);

export function FormSection() {
    const [value, setValue] = useState("");
    return (
        <Section>
            <Header>Forms</Header>
            <Section>
                <Header level={2}>Inputs</Header>
                <TextInput
                    value={value}
                    onChange={setValue}
                    label="Some Label"
                />
                <TextInput
                    value={value}
                    onChange={setValue}
                    placeholder="Input without label"
                />
            </Section>
            <Section>
                <Header level={2}>Selects</Header>
                {/* <Select /> */}
                <div style={{ maxHeight: 500, overflowY: "scroll" }}>
                    <ViewportRenderer items={items}>
                        {(i) => `Item ${i}`}
                    </ViewportRenderer>
                </div>
            </Section>
        </Section>
    );
}
