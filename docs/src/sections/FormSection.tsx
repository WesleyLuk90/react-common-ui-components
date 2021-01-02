import React, { useState } from "react";
import { Section } from "../../../src/components/Section";
import { TextInput } from "../../../src/forms/TextInput";
import { Header } from "../../../src/text/Header";

export function FormSection({}, {}) {
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
        </Section>
    );
}
