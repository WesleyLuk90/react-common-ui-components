import React from "react";
import { Layout, LayoutArea } from "../../src/components/Layout";
import { DefaultVariant } from "../../src/DefaultVariant";
import "./App.css";

const AppLayout = new DefaultVariant("app");

export function App() {
    return (
        <div>
            <Layout variant={AppLayout}>
                <LayoutArea name="navigation">Nav</LayoutArea>
                <LayoutArea name="content">Content</LayoutArea>
                <LayoutArea name="footer">Footer</LayoutArea>
            </Layout>
        </div>
    );
}
