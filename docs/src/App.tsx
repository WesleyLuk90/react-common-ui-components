import React from "react";
import { Button } from "../../src/components/Button";
import { Layout, LayoutArea } from "../../src/components/Layout";
import { Section } from "../../src/components/Section";
import { DefaultVariant } from "../../src/DefaultVariant";
import "../../src/reset.css";
import "../../src/themes/bootstrap.scss";
import "./App.css";
import { Nav } from "./Nav";
import { TextSection } from "./sections/TextSection";

const AppLayout = new DefaultVariant("app");

export function App() {
    return (
        <div>
            <Layout variant={AppLayout}>
                <LayoutArea name="navigation">
                    <Nav />
                </LayoutArea>
                <LayoutArea name="content">
                    <TextSection />
                    <Section>
                        <Button>Click Me</Button>
                        <Button>Not Me</Button>
                    </Section>
                </LayoutArea>
                <LayoutArea name="footer">Footer</LayoutArea>
            </Layout>
        </div>
    );
}
