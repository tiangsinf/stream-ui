import React from "react";
import { Popover, Button, Classes } from "@blueprintjs/core";

const AppPop = () => {
    return (
        <div className="docs-popover-example-scroll">
            <Popover
                popoverClassName={Classes.POPOVER_CONTENT_SIZING}
                portalClassName="foo"
                enforceFocus={false}
                isOpen={true}
            >
                <Button intent={Classes.MINIMAL} text="Popover target" />
            </Popover>
        </div>
    );
};

export default AppPop;
