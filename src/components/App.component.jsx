import React, { Component } from "react";
import NavBar from "./NavBar.component";

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

class App extends Component {
    render() {
        return (
            <div className="bp3-dark">
                <NavBar />
            </div>
        );
    }
}

export default App;
