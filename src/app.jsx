import React from "react";
import InitLoader from "./components/loader";
import InputControls from "./tasks/controls";
import Tasks from "./tasks";
import {TaskIcon} from "./components/svg.icon";

function App() {


    return (<React.Suspense fallback={<InitLoader/>}>

        <div className={"container"}>
            <div className={"task-container"}>
                <h1><TaskIcon/> Task list</h1>

                <InputControls/>
            </div>
            <div className={"task-container no-padding"}>
                <Tasks/>
            </div>
        </div>

    </React.Suspense>);
}

export default App;
