// noinspection SpellCheckingInspection

import { Component, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';
import AccessibleTable from "./components/AccessibleTable.class";

import MyComponent from './components/beginning-reactjs-foundations/MyComponent.class';
import Foo from './components/beginning-reactjs-foundations/Foo.class';
import { FooWithoutBind } from './components/beginning-reactjs-foundations/Foo.class';
import PlotlyPlumberHistogramEx from './components/PlotlyPlumberHistogramEx.class';
import UserProfileClass from './components/beginning-reactjs-foundations/UserProfile.class';
import UserProfileCreateReactClass from './components/beginning-reactjs-foundations/UserProfile.create-react-class';

import AbstractingContainersAndItems from "./components/material-ui/AbstractingContainersAndItems";
import FillingSpace from "./components/material-ui/FillingSpace";
import UnderstandingBreakpoints from "./components/material-ui/UnderstandingBreakpoints";

// import aws_config from "./aws-config";

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const table_columns = [
    "name",
    "calories",
    "fat",
    "carbs",
    "protein"
];

const table_labels = {
    "name": "Dessert (100g serving)",
    "calories": "Calories",
    "fat": "Fat (g)",
    "carbs": "Carbs (g)",
    "protein": "Protein (g)"
};

const table_rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
];

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Amplify / React Frontend v.s. Shiny / Plumber Backend </h1>

                    <div>
                        <a href="https://vitejs.dev" target="_blank">
                            <img src="/vite.svg" className="logo" alt="Vite logo" />
                        </a>
                        <a href="https://reactjs.org" target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                    </div>

                    <h1>Vite + React</h1>
                    <p className="read-the-docs">
                        Click on the Vite and React logos to learn more
                    </p>
                </header>
            </div>
        )
    }
}

function App ({ content }) {

    let content_loaded = false;

    const [windowWidth, setWidth]   = useState(0);
    const [windowHeight, setHeight] = useState(0);
    const [windowRatio, setRatio] = useState(0);

    (function init () {
        // Check access to react/vite environment variables
        console.log("Welcome to Amplify React app version:", import.meta.env.VITE_APP_VERSION)
        // console.log(aws_config);

        // Check component class names
        console.log("Custom components...");

        // React components have class names...
        console.log("App is: ", App.name);
        console.log("AccessibleTable is: ", AccessibleTable.name);
        console.log("Header is: ", Header.name);
        console.log("MyComponent is: ", MyComponent.name);
        console.log("Foo is: ", Foo.name);
        console.log("FooWithoutBind is: ", FooWithoutBind.name);
        console.log("PlotlyPlumberHistogramEx is: ", PlotlyPlumberHistogramEx.name);
        console.log("UserProfileClass is: ", UserProfileClass.name);

        // React components created by createClass() do not have class names...
        console.log("UserProfileCreateReactClass is: ", UserProfileCreateReactClass.name || UserProfileCreateReactClass.constructor.name);

        // Material-UI components created by withStyles() do not have class names...
        console.log("AbstactingContainersAndItems is: ", AbstractingContainersAndItems.name || AbstractingContainersAndItems.constructor.name);
        console.log("FillingSpace is: ", FillingSpace.name || FillingSpace.constructor.name);
        console.log("UnderstandingBreakpoints is: ", UnderstandingBreakpoints.name || UnderstandingBreakpoints.constructor.name);
    }())

    function addContentToCurrentComponent () {
        if (!content_loaded) {
            // Anything in here is fired on component mount.
            const app_container = document.getElementsByClassName("App")[0];
            const app_first_child = app_container.childNodes[0] || null;
            const app_content = (typeof content === 'function') ?
                content() :
                { childNodes: [] };
            // console.log(app_first_child);
            // console.log(app_content.childNodes);
            setTimeout((container) => {
                // container.append(app_content.childNodes);
                app_content.childNodes.forEach(c => {
                    // console.log(c);
                    container.insertBefore(c, app_first_child)
                });
            }, 53, app_container);
            content_loaded = true;
        }
    }

    useEffect( addContentToCurrentComponent , []);

    function updateWindowDimensions () {
        if (!!window &&
            window.hasOwnProperty("innerWidth") &&
            window.hasOwnProperty("innerHeight")
        ) {
            console.log("Update width to: " + window.innerWidth)
            setWidth(window.innerWidth);
            console.log("Update height to: " + window.innerHeight)
            setHeight(window.innerHeight);
            console.log("Update height/width ratio to: " + window.innerHeight/window.innerWidth);
            setRatio(window.innerHeight/window.innerWidth);
            setTimeout(() => {
                console.log({
                    windowWidth,
                    windowHeight,
                    windowRatio
                })
            })
        }
    }

    useEffect(() => {
        window.addEventListener("load", updateWindowDimensions);
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions);
    }, []);

    return (
        <div className="App">
            {/*<Header />*/}

            {/*<FooWithoutBind />*/}

            {/*<Foo />*/}

            {/*<AbstractingContainersAndItems />*/}

            {/*<FillingSpace />*/}

            {/*<UnderstandingBreakpoints />*/}

            <AccessibleTable columns={table_columns} labels={table_labels} rows={table_rows} />

            <PlotlyPlumberHistogramEx windowWidth={windowWidth} />

        </div>
    )
}

export default App;
