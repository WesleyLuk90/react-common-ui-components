import React from "react";
import {
    Navigation,
    NavigationItem,
    NavigationSeparator,
} from "../../src/components/Navigation";

export function Nav() {
    return (
        <Navigation>
            <NavigationItem>Foo</NavigationItem>
            <NavigationItem>Bar</NavigationItem>
            <NavigationSeparator></NavigationSeparator>
            <NavigationItem>Baz</NavigationItem>
        </Navigation>
    );
}
