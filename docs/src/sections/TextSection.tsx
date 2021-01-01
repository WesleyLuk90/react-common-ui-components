import React from "react";
import { Section } from "../../../src/components/Section";
import { DeletedText } from "../../../src/text/DeletedText";
import { Emphasis } from "../../../src/text/Emphasis";
import { Header } from "../../../src/text/Header";
import { InsertedText } from "../../../src/text/InsertedText";
import { Paragraph } from "../../../src/text/Paragraph";

export function TextSection() {
    return (
        <Section>
            <Header>Header 1</Header>
            <Header level={2}>Header 2</Header>
            <Header level={3}>Header 3</Header>
            <Header level={4}>Header 4</Header>
            <Header level={5}>Header 5</Header>
            <Header level={6}>Header 6</Header>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
            <Paragraph>
                <DeletedText>Deleted Text</DeletedText>
            </Paragraph>
            <Paragraph>
                <InsertedText>Inserted Text</InsertedText>
            </Paragraph>
            <Paragraph>
                <Emphasis>Emphasis Text</Emphasis>{" "}
            </Paragraph>
        </Section>
    );
}
