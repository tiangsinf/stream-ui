import * as React from "react";
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup
} from "@blueprintjs/core";

const NavBar = () => {
    return (
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <Button className={Classes.MINIMAL} icon="application" />
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon="home" text="Home" />
                <Button
                    className={Classes.MINIMAL}
                    icon="document"
                    text="Files"
                />
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon="user" text="user" />
            </NavbarGroup>
        </Navbar>
    );
};

export default NavBar;
