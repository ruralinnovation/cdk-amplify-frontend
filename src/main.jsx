import React from 'react';
// import { createRoot } from 'react-dom/client';
import { render } from "react-dom";
import './index.css';
import App from './App';

import ApolloGraphQLProvider from "./modules/fullstack-graphql-book/src/components/ApolloGraphQLProvider";

const
    root_id = 'react-app',
    root_container = document.getElementById(root_id),
    root_content = document.createElement("div"),
    root_init = (evt) => {
        // console.log(evt);
        // evt.preventDefault();
        // console.log(root_container.childNodes.length, root_container.childNodes);

        for (const elm of root_container.childNodes) {
            const innerElm = elm;
            if (elm.nodeType === 1) {
                console.log(elm.nodeType, elm);
                root_content.appendChild(innerElm);
            } else if (elm.nodeType === 3) {
                console.log(elm.nodeType, elm);
            }
        }

        // const root = createRoot(root_container);
        // root.render(
        //     <React.StrictMode>
        //         <ApolloGraphQLProvider>
        //             <App content={ () => root_content } />
        //         </ApolloGraphQLProvider>
        //     </React.StrictMode>
        // );

        render(
            <React.StrictMode>
                <ApolloGraphQLProvider>
                    <App content={ () => root_content } />
                </ApolloGraphQLProvider>
            </React.StrictMode>,
            root_container
        );

        root_container.style.opacity = "1.0";
    };

if (typeof Shiny === 'object') {
    document.body.addEventListener('cori.apps:init', root_init);
} else {
    document.body.childNodes.forEach(n => ("data" in n && n.data.match(/headContent/) !== null) ? document.body.removeChild(n) : true);
    root_init({ preventDefault: () => {} })
}
