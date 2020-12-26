import React from "react";
import { Link } from "../../src/components/Link";
import {
    Navigation,
    NavigationItem,
    NavigationSeparator,
} from "../../src/components/Navigation";

export function Nav() {
    return (
        <Navigation>
            <NavigationItem>
                <Link href="#">Foo</Link>
            </NavigationItem>
            <NavigationItem>Bar</NavigationItem>
            <NavigationSeparator></NavigationSeparator>
            <NavigationItem>Baz</NavigationItem>
        </Navigation>
    );
}
